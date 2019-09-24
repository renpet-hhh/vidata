import React, { useState, CSSProperties, useRef, useEffect } from 'react'
import COLOR from '../constants/COLOR';


interface Props {
    /** Applied to both fixed and editable elements.
     * You might not specify 'width' if you are using 'noWrap'
     */
    style?: CSSProperties,
    /** You can get the current text, useful for saving after editing */
    onBlur?: (text: string) => void,
    placeholder?: string,
    /** Initial text (not a placeholder) */
    defaultText?: string,
    hoverColor?: string,
    /** If true, the component will resize to exactly fit the text
     * 
     * This option modifies this component such that 'width' in 'props.style' can't be specified, 
     * because the component is resized according to the user input 
     */
    autoResize?: boolean,
    /** If true, input that make width greater than
     * 'maxWidth' in 'props.style' will not be blocked and will instead display "...".
     * Defaults to false, blocking that kind of input */
    overflowAllow?: boolean,
    /** Limits the number of text characters */
    maxLength?: number
}


const FixableInput = (props: Props) => {
    if (props.autoResize && props.style && props.style.width) throw new Error("Can't specify 'width' and 'autoResize' at the same time. Width calculation is done automatically");

    const [localText, setLocalText] = useState(props.defaultText ? props.defaultText.slice(0, props.maxLength) : "");
    const [isWritable, setIsWritable] = useState(false);
    const [isFixedBeingHovered, setIsFixedBeingHovered] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    /** Used to handle imperative things like focus, text selections... */
    const writableRef = useRef<HTMLInputElement>(null);

    /** --------------------------------------------------------------
     * 
     * The following logic is EXCLUSIVE to when `props.autoResize` is true 
     * 
     */

    /** Used to measure the textContent width dynamically (after applied browser calculations).
     * This component is invisible and hidden from normal flow */
    const measurableRef = useRef<HTMLSpanElement>(null);
    /** This component is resizable, so width is a state */
    const [width, setWidth] = useState("auto");

    const measureWidthByText = (text: string) => {
        if (measurableRef.current) {
            measurableRef.current.style.width = "auto";
            measurableRef.current.style.maxWidth = "none";
            measurableRef.current.textContent = text;
            const result = measurableRef.current.getBoundingClientRect().width + "px";
            return result;
        }
        return "0px";
    }

    const convertWidthToPx = (width: string | number) => {
        if (measurableRef.current) {
            measurableRef.current.style.width = typeof width === "number" ? width + "px" : width;
            const result = measurableRef.current.offsetWidth + "px";
            measurableRef.current.style.width = "auto"; // DOM won't be modified, only Virtual DOM
            return result;
        }
        return "0px";
    }

    /** Sets initial width after first render (need DOM). width === "auto" works for the span,
     * but not for the input. We need to calculate the width for the input */
    useEffect(() => {
        if (measurableRef.current) {
            setWidth(measureWidthByText(localText ? localText : props.placeholder || ""));
        }
    }, []);


    /**
     * 
     * End of `props.autoResize` exclusive logic
     * 
     * -------------------------------------------------------------- */



    /** When the input appears, all its text must be selected */
    useEffect(() => {
        if (isWritable && writableRef.current) {
            writableRef.current.focus();
            writableRef.current.setSelectionRange(0, writableRef.current.value.length);
        }
    }, [isWritable]);

    /** when span is clicked */
    const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        setIsWritable(true);
        setIsFixedBeingHovered(false);
    }

    /** when input loses focus */
    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (props.autoResize && localText === "") {
            const placeholderWidth = measureWidthByText(props.placeholder || "");
            setWidth(placeholderWidth);
        }
        setIsWritable(false);
        props.onBlur && props.onBlur(localText);
    }

    /** when input changes */
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = props.autoResize ? e.currentTarget.value.replace(/\n/g, "") : e.currentTarget.value;
        const measured = measureWidthByText(value ? value : "");
        let maxWidth = props.style && props.style.maxWidth;
        let overflowing = props.autoResize ?
            maxWidth !== undefined && parseFloat(measured) > parseFloat(convertWidthToPx(maxWidth)) :
            e.currentTarget.scrollWidth > e.currentTarget.clientWidth;
        const shouldBlock = !props.overflowAllow && overflowing;
        if (shouldBlock) return; // no state will change
        if (props.autoResize) setWidth(measured);
        setIsOverflowing(overflowing);
        setLocalText(value);
    }

    /** --------------------------------------------------------------
     * 
     *                             STYLING
     * 
     * -------------------------------------------------------------- */

    const DEFAULT_BORDER = {
        hoverColor: "#D0D0D0",
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "0.1rem"
    }

    const borderColorFromProps = props.style && (props.style.borderColor || (typeof props.style.border === "string" ? props.style.border.split(" ")[2] : undefined));
    const borderColor = isFixedBeingHovered ? props.hoverColor || DEFAULT_BORDER.hoverColor : borderColorFromProps || DEFAULT_BORDER.borderColor;

    const defaultOverwritableStyleForBoth: CSSProperties = {
        // really important that padding, fontSize and borderWidth are the same for both
        fontSize: "1.1rem",
        // overwritable if props.autoResize is false
        width: width
    }

    let spanStyle: CSSProperties = {
        /** Overwritable styling */
        ...defaultOverwritableStyleForBoth,
        ...(props.style || {}),
        /** State-dependent styling */
        color: localText === "" ? COLOR.placeholder : props.style && props.style.color || "#282828",
        borderColor: borderColor,
        /** Not overwritable styling */
        cursor: "pointer",
        boxSizing: "border-box",
        whiteSpace: "pre",
        overflow: "hidden",
        padding: "0.3rem",
        borderStyle: DEFAULT_BORDER.borderStyle,
        borderWidth: DEFAULT_BORDER.borderWidth,
        /* when `props.autoResize` is true, 'display: block' guarantees that the div container will not be larger
        than the textarea */
        display: "block",
    }

    const inputStyle: CSSProperties = {
        /** Overwritable styling */
        ...defaultOverwritableStyleForBoth,
        ...(props.style || {}),
        /** Not overwritable styling */
        resize: "none",
        boxSizing: "border-box",
        whiteSpace: "pre-wrap",
        padding: "0.3rem 0.2rem",
        /* when `props.autoResize` is true, 'display: block' guarantees that the div container will not be larger
        than the textarea */
        display: "block"
    }

    const writableJSX = <input ref={writableRef} data-testid="editable" style={inputStyle}
        value={localText} onBlur={onBlur} onChange={onChange} maxLength={props.maxLength}></input>;

    const fixedJSX = <span data-testid="fixed" style={spanStyle}
        onMouseEnter={() => setIsFixedBeingHovered(true)} onMouseLeave={() => setIsFixedBeingHovered(false)}
        onClick={onClick}>{localText ? localText : props.placeholder}</span>

    const overflowJSX = <div style={{
        position: "absolute", bottom: "50%", right: 0,
        transform: "translate(0, 75%)", backgroundColor: "white", margin: "0.3rem", pointerEvents: "none",
        boxSizing: "border-box", padding: "0 0.2rem"
    }}>...</div>;

    if (props.autoResize) {
        return (
            <div style={{ position: "relative" }}>
                <span ref={measurableRef} style={{ ...spanStyle, position: "absolute", visibility: "hidden", width: "auto", height: "auto", maxWidth: "none", borderColor: "transparent" }}></span>
                {isWritable && writableJSX}
                {!isWritable && fixedJSX}
                {!isWritable && isOverflowing && overflowJSX}
            </div>
        )
    }
    return (
        <div style={{ position: "relative" }}>
            {isWritable && writableJSX}
            {!isWritable && fixedJSX}
            {!isWritable && isOverflowing && overflowJSX}
        </div>
    )
}

export default FixableInput;
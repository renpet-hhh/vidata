import React, { useState, CSSProperties, useRef, useEffect } from 'react'
import COLOR from '../constants/COLOR';

type Props = {
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
    /** Limits the number of text characters */
    maxLength?: number
}


const FixableTextArea = (props: Props) => {
    const [localText, setLocalText] = useState(props.defaultText || "");
    const [isWritable, setIsWritable] = useState(false);
    const [isFixedBeingHovered, setIsFixedBeingHovered] = useState(false);
    /** Used to handle imperative things like focus, text selections... */
    const writableRef = useRef<HTMLTextAreaElement>(null);

    /** When the textarea appears, all its text must be selected */
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

    /** when textarea loses focus */
    const onBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsWritable(false);
        props.onBlur && props.onBlur(localText);
    }

    /** when textarea changes */
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value;
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
        padding: "0.3rem",
        fontSize: "1.1rem",
        borderStyle: DEFAULT_BORDER.borderStyle,
        borderWidth: DEFAULT_BORDER.borderWidth
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
        whiteSpace: "pre-wrap",
        /* when `props.noWrap` is true, 'display: block' guarantees that the div container will not be larger
        than the textarea */
        display: "block",
    }

    const textAreaStyle: CSSProperties = {
        /** Overwritable styling */
        ...defaultOverwritableStyleForBoth,
        ...(props.style || {}),
        /** Not overwritable styling */
        resize: "none",
        boxSizing: "border-box",
        whiteSpace: "pre-wrap",
        //overflow: props.noWrap ? "hidden" : "auto",
        /* when `props.noWrap` is true, 'display: block' guarantees that the div container will not be larger
        than the textarea */
        display: "block"
    }

    const writableJSX = <textarea ref={writableRef} data-testid="editable" style={textAreaStyle}
        value={localText} onBlur={onBlur} onChange={onChange} maxLength={props.maxLength}></textarea>;

    const fixedJSX = <span data-testid="fixed" style={spanStyle}
        onMouseEnter={() => setIsFixedBeingHovered(true)} onMouseLeave={() => setIsFixedBeingHovered(false)}
        onClick={onClick}>{localText ? localText : props.placeholder}</span>

    return isWritable ? writableJSX : fixedJSX;
}

export default FixableTextArea;
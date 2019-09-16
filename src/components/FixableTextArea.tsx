import React, { useState, CSSProperties, useRef, useEffect } from 'react'
import COLOR from '../constants/COLOR';


interface Props {
    placeholder?: string,
    style?: CSSProperties,
    fixedStyle?: CSSProperties,
    editableStyle?: CSSProperties,
    onBlur?: (text: string) => void,
    defaultText?: string,
    text?: string,
    hoverColor?: string
}

const FixableTextArea = (props: Props) => {
    if (props.text !== undefined && props.defaultText !== undefined) throw new Error("Can't pass 'text' and 'defaultText' as props at the same time. Choose one for the entire lifecycle");

    const [localText, setLocalText] = useState(props.defaultText || props.text || "");
    const [isWritable, setIsWritable] = useState(false);
    const [isFixedBeingHovered, setIsFixedBeingHovered] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);


    useEffect(() => {
        if (isWritable && textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.setSelectionRange(0, textAreaRef.current.value.length);
        }
    }, [isWritable]);

    useEffect(() => {
        if (props.text === undefined) return;
        setLocalText(props.text || "");
    }, [props.text]);

    const onBlur = () => {
        setIsWritable(false);
        props.onBlur && props.onBlur(localText);
    }


    const defaultSpanStyle: CSSProperties = {
        cursor: "pointer",
        borderColor: isFixedBeingHovered ? props.hoverColor || "#D8D8D8" : "transparent",
        borderStyle: "solid",
        borderWidth: "2px",
        padding: "0.3rem",
        color: "#282828",
        boxSizing: "border-box",
        whiteSpace: "pre-wrap",
        fontSize: "1.1rem"
    }

    const defaultTextAreaStyle: CSSProperties = {
        resize: "none",
        padding: "0.3rem",
        fontSize: "1.1rem",
        boxSizing: "border-box"
    }

    let spanStyle = Object.assign({}, defaultSpanStyle, props.style, props.fixedStyle);
    if (localText === "") spanStyle.color = COLOR.placeholder;

    const textAreaStyle = Object.assign({}, defaultTextAreaStyle, props.style, props.editableStyle);

    return isWritable ?
        <textarea data-testid="editable" ref={textAreaRef} style={textAreaStyle} value={localText} onBlur={onBlur} onChange={e => setLocalText(e.currentTarget.value)}></textarea>
        :
        <span data-testid="fixed" style={spanStyle} onMouseEnter={() => setIsFixedBeingHovered(true)} onMouseLeave={() => setIsFixedBeingHovered(false)} onClick={() => {
            setIsWritable(true);
        }}>{localText ? localText : props.placeholder}</span>

}

export default FixableTextArea;
import React, { CSSProperties } from 'react'
import Input from './Input';

export default function LabeledInput(props: {
    label: string,
    defaultValue?: string,
    placeholder?: string,
    spaceBetween?: string,
    marginVertical?: string,
    onChange?: (value: string) => void,
    onBlur?: (value: string) => void,
    className?: string,
    invalid?: boolean,
    /** Whether label and input should be at the same height (`true`) or label above input (`false`, default) */
    labelBySide?: boolean,
    inputWidth?: string
}) {
    /* Label text + input container */
    const labelStyle: CSSProperties = {
        margin: `${props.marginVertical === undefined ? "0.4rem" : props.marginVertical} 0.2rem`,
    }

    /* Label text */
    const spanStyle: CSSProperties = {
        paddingRight: props.spaceBetween === undefined ? "0.6rem" : props.spaceBetween,
        display: props.labelBySide ? "inline-block" : "block"
    }
    return (
        <label style={labelStyle}>
            <span style={spanStyle}>{props.label}</span>
            <Input className={props.className} onChange={props.onChange} onBlur={props.onBlur} defaultValue={props.defaultValue} placeholder={props.placeholder}
                invalid={props.invalid} width={props.inputWidth}></Input>
        </label>
    )
}

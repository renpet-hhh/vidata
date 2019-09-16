import React, { useState } from 'react'
import COLOR from '../constants/COLOR';

interface Props {
    onChange?: (value: string) => void,
    onBlur?: (value: string) => void,
    defaultValue?: string,
    placeholder?: string,
    className?: string,
    invalid?: boolean,
    width?: string
}

export default function Input(props: Props) {
    const [value, setValue] = useState(props.defaultValue || "");

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value;
        props.onBlur && props.onBlur(currentValue);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value;
        setValue(currentValue);
        props.onChange && props.onChange(currentValue);
    }
    const commonStyle = {
        width: props.width
    };
    const invalidStyle = {
        border: `2px solid ${COLOR.error.invalidField}`
    }
    const finalStyle = props.invalid ? Object.assign({}, invalidStyle, commonStyle) : commonStyle

    return (
        <input
            style={finalStyle}
            className={props.className}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={props.placeholder}
            data-testid="Input"
        ></input>
    )
}

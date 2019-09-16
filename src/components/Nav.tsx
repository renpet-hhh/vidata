import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props: {
    name: string,
    to: string,
    paddingHorizontal?: string,
    paddingVertical?: string,
    color?: string,
    backgroundColor?: string
}) {

    const DEFAULTS = {
        root: {
            padding_h: "0.2rem",
            padding_v: "0.6rem"
        },
        link: {
            padding_h: "0.6rem",
            padding_v: "0.6rem"
        }
    }

    const rootStyle = {
        padding: `${props.paddingVertical || DEFAULTS.root.padding_v} ${props.paddingHorizontal || DEFAULTS.root.padding_h}`,
        backgroundColor: props.backgroundColor
    }

    const linkStyle = {
        padding: `${DEFAULTS.link.padding_v} ${DEFAULTS.link.padding_h}`
    }

    const textStyle = {
        color: props.color
    }

    return (
        <div style={rootStyle}>
            <Link to={props.to} style={linkStyle}>
                <span style={textStyle}>
                    {props.name}
                </span>
            </Link>
        </div>


    )
}

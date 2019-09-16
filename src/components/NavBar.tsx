import React from 'react'
import Nav from './Nav';
import { FlexHorizontal } from './styled/positionals';

export default function NavBar(props: {
    names: string[],
    paths: string[],
    spaceBetween?: string,
    color?: string,
    backgroundColor?: string
}) {

    const DEFAULTS = {
        color: "#C8BFC7",
        backgroundColor: "#090302"
    }

    const navsJSX = [];
    for (let i = 0; i < props.names.length; i++) {
        const navProps = {
            key: props.paths[i],
            to: props.paths[i],
            name: props.names[i],
            paddingHorizontal: props.spaceBetween,
            color: props.color || DEFAULTS.color,
            backgroundColor: props.backgroundColor || DEFAULTS.backgroundColor
        };
        navsJSX.push(
            <Nav {...navProps}></Nav>
        );
    }

    return (
        <FlexHorizontal>
            {navsJSX}
        </FlexHorizontal>
    )
}

import React, { CSSProperties } from 'react'

interface Props {
    text?: string,
    x: number,
    y: number
}
/** A text balloon absolutely positioned */
const Balloon = (props : Props) => {
    /** Non-physical container which specifies position */
    const container : CSSProperties = {
        position: 'absolute',
        left: props.x,
        top: props.y,
        transform: "translate(-50%, -100%)",
        pointerEvents: "none"
    }
    /** Container for the text and used as positional reference by the triangle */
    const rectangle : CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: "solid 1px #C0C0C0",
        backgroundColor: "#F0F0F0",
        textAlign: 'center',
        padding: 5,
        minWidth: 20
    }
    const triangle : CSSProperties = {
        position: "absolute",
        left: "50%",
        bottom: 0,
        width: 15,
        height: 15,
        transformOrigin: "top left",
        transform: "rotate(45deg)",
        border: "solid 2px black",
        zIndex: -1
    }
    const p : CSSProperties = {
        margin: 5
    }
    return (
        <div style={container}>
            <div style={rectangle}>
                <p style={p}>{props.text}</p>
                <div style={triangle}></div>
            </div>
        </div>
    )
};

export default Balloon;
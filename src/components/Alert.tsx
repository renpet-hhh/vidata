import React, { useState, CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BtnTransparent } from './styled/buttons';

type Props = {
    type?: "info" | "warn" | "error",
    children: string,
    /** Make this component disappear */
    onClick: () => void,
    width?: string,
    height?: string
}

export default function Alert(props: Props) {
    const TYPE = props.type || "info"; // default type === "info"

    /**
     * Colors grouped by type
     */
    const COLORS = {
        warn: {
            color: "#F95D09",
            backgroundColor: "#FCC4A4",
            hoverColor: "#996909"
        },
        error: {
            color: "#EF362F",
            backgroundColor: "#FF8E82",
            hoverColor: "#682F2F"
        },
        info: {
            color: "#248FAD",
            backgroundColor: "#B2D4FF",
            hoverColor: "#4C6C75"
        }
    }

    /** Local/inline styles */
    const STYLES: { [name: string]: CSSProperties } = {
        alertContainer: {
            color: COLORS[TYPE].color,
            backgroundColor: COLORS[TYPE].backgroundColor,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            width: props.width,
            height: props.height,
            zIndex: 100000
        },
        alertText: {
            display: "inline",
            marginLeft: "1rem",
            whiteSpace: "nowrap"
        },
        closeButton: {
            padding: "0 0.8rem"
        }
    }

    /**
     * Local state is responsible by the hovering style
     */
    const [buttonColor, setButtonColor] = useState(COLORS[TYPE].color);

    const enableHoverColor = () => {
        setButtonColor(COLORS[TYPE].hoverColor);
    }

    const disableHoverColor = () => {
        setButtonColor(COLORS[TYPE].color);
    }

    return (
        <div style={STYLES.alertContainer}>
            <p style={STYLES.alertText} data-testid="Alert-text">{props.children}</p>
            <BtnTransparent style={STYLES.closeButton} data-testid="close-button" onClick={props.onClick} onMouseEnter={enableHoverColor} onMouseLeave={disableHoverColor}>
                <FontAwesomeIcon icon={faTimes} style={{ color: buttonColor, fontSize: "1.5rem" }}></FontAwesomeIcon>
            </BtnTransparent>
        </div>
    )
}

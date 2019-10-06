import React, { useState, CSSProperties } from 'react'
import scaleLinear from '../utils/scaleLinear';
import Balloon from './Balloon';
import { Scale } from '../utils/scaleLinear';
import { FlexHorizontal } from './styled/positionals';
import _ from 'lodash';

interface Props {
    label?: string,
    width?: number,
    height?: number,
    radius?: number,
    value: number,
    onChange?: (value: number) => void,
    range: number[],
    defaultValue?: number,
    lock?: boolean
}

const DEFAULTS = {
    label: "",
    width: 200,
    height: 2,
    radius: 5,
    onChange: () => null
}

const ScrollerController = (props : Props) => {
    const { label, width, height, radius, value,
        onChange, range, defaultValue, lock } = _.merge({}, DEFAULTS, props);

    const scale : Scale = scaleLinear([0, width], range);
    const position = scale.inverse(value);
    const [showBalloon, setShowBalloon] = useState(false);

    const beginDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowBalloon(true);
        const circle = e.currentTarget;
        if (circle.parentElement === null) throw new Error("Begin drag listener was put in a component that doesn't have a parent element.");
        const RECT = circle.parentElement.getBoundingClientRect();
        const clickOffsetFromPosition = position + RECT.left - e.clientX;

        // event below is handled by the Window
        const handleMouseMove = (evt : MouseEvent) => {
            let mousePos = evt.clientX;    
            let new_pos = mousePos - RECT.left + clickOffsetFromPosition;
            if (new_pos < 0) {
                new_pos = 0;
            } else if (new_pos > width) {
                new_pos = width;
            }
            onChange(scale(new_pos));
        };
        const handleMouseUp = (e : MouseEvent) => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            setShowBalloon(false)
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    const barStyle : CSSProperties = {
        width: width,
        height: height,
        backgroundColor: "#D0D0D0",
        marginLeft: 8,
        position: "relative"
    }
    const cirleControllerStyle : CSSProperties = {
        borderRadius: 25,
        width: 2 * radius,
        height: 2 * radius,
        backgroundColor: value !== null || lock ? "#C2C2C2" : "#919191",
        position: "relative",
        left: position - radius,
        bottom: radius / 2 + height / 2
    }

    return (
        <FlexHorizontal onDragStart={e => e.preventDefault()} onDrop={e => e.preventDefault()}>
            <label>{label}</label>
            <div style={barStyle}>
                {showBalloon && <Balloon x={position} y={-height - 5} text={value.toFixed(2)}></Balloon>}
                <div data-testid="draggable" style={cirleControllerStyle} onMouseDown={e => beginDrag(e)}></div>
            </div>
        </FlexHorizontal>
    );
};

export default ScrollerController;

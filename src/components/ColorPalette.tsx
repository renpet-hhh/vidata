import React, { useState, useEffect, useRef, CSSProperties } from 'react'
import isColor from '../utils/isColor';
import useMountRef from '../hooks/useMountRef';
import styled from 'styled-components';

interface Props {
    value: string, // the current color
    onChange: (new_value: string) => void
    label?: string | undefined
}

// size in pixels
const RADIUS = 100;
const TONE_PICKER_WIDTH = 30;
const MARGIN_INSIDE = 20;

const FlexHorizotalLabel = styled.label`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
`;

export default function ColorPalette(props: Props) {
    const outerContainerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [inputValue, setInputValue] = useState<string>(props.value);
    // Base color for the tone selector
    const [baseColor, setBaseColor] = useState<string>(props.value);
    // Whether picker should appear visible (false means display: none)
    // Picker is the container of the circle palette and the tone selector rect
    const [show, setShow] = useState(false);
    const didMount = useMountRef();

    /** Sync props.value and inputValue */
    useEffect(() => {
        setInputValue(props.value);
    }, [props.value]);


    // When baseColor changes, create/change the tone selector
    useEffect(() => {
        if (didMount.current) {
            if (!isColor(baseColor)) return;
            const ctx = canvasRef.current!.getContext('2d')!;
            const linear_gradient = ctx.createLinearGradient(0, 0, 0, 2 * RADIUS);
            linear_gradient.addColorStop(0, "white");
            linear_gradient.addColorStop(0.5, baseColor);
            linear_gradient.addColorStop(1, "black");
            ctx.fillStyle = linear_gradient;
            ctx.fillRect(2 * RADIUS + MARGIN_INSIDE, 0, TONE_PICKER_WIDTH, 2 * RADIUS);
        }
    }, [baseColor]);


    // after component mount
    useEffect(() => {
        // Add click listener to close the palette to window
        const closePalette = (e: MouseEvent) => {
            if (e.target instanceof Node && !outerContainerRef.current!.contains(e.target)) {
                setShow(false)
            }
        }
        window.addEventListener('mousedown', closePalette);

        // create the palette itself, made by 360 arcs with consecutive hues
        for (let i = 0; i < 360; i++) {
            const ctx = canvasRef.current!.getContext('2d')!;
            ctx.beginPath();

            // x0 = y0 = radius, to centralize the palette
            // x1 = y1 = radius, because the two circles are concentric
            // r0 = 0, r1 = radius
            const radial_gradient = ctx.createRadialGradient(RADIUS, RADIUS, 0, RADIUS, RADIUS, RADIUS);
            radial_gradient.addColorStop(0, "hsl(" + i + ", 100%, 0%)"); // darker in the center
            radial_gradient.addColorStop(1, "hsl(" + i + ", 100%, 50%)"); // brighter at edges
            ctx.fillStyle = radial_gradient;

            // start at the top
            const baseAngle = 3 * Math.PI / 2;
            // x = y = radius, to centralize the palette
            // Math.PI/180 === 1 deg, each arc is 2 deg because with just 1 deg the palette is weird
            ctx.arc(RADIUS, RADIUS, RADIUS, baseAngle + i * Math.PI / 180, baseAngle + (i + 2) * Math.PI / 180);
            ctx.lineTo(RADIUS, RADIUS);
            ctx.fill();
        }
        return () => window.removeEventListener('mousedown', closePalette); // when unmounting, unsubscribe
    }, []);


    const canvasHandleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        e.stopPropagation();
        const canvas = e.currentTarget;
        const canvasRECT = canvas.getBoundingClientRect();
        const x = e.clientX - canvasRECT.left;
        const y = e.clientY - canvasRECT.top;
        const ctx = canvas.getContext('2d')!;
        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        const color = "rgba(" + pixelData[0] + ", " + pixelData[1] + ", " + pixelData[2] + ", 1)";
        if (pixelData[3] === 0) return;
        setInputValue(color);
        props.onChange(color);
        if (x <= 2 * RADIUS) { // click is on baseColor picker (circle palette)
            setBaseColor(color);
        }
    }

    const changeColor = (e: React.FocusEvent<HTMLInputElement>) => {
        const color = e.target.value;
        setInputValue(color);
        if (!isColor(color)) return;
        setBaseColor(color);
        props.onChange(color)
    };

    const inputStyle: CSSProperties = {
        marginLeft: 5
    }
    // Picker is the container of the circle palette and the tone selector rect
    const pickerStyle: CSSProperties = {
        border: "solid 4px #D0D0D0",
        backgroundColor: "#F0F0F0",
        display: show ? "inline-flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left: "15rem",
        bottom: "3rem",
        padding: "1rem"
    }
    const colorIndicatorSquareStyle: CSSProperties = {
        display: "inline-block",
        height: 22,
        width: 22,
        backgroundColor: props.value,
        marginLeft: "0.5rem"
    }

    /** PickerJSX must always be rendered because initial drawing
     * is done with the canvasRef */
    const PickerJSX = (
        <div style={pickerStyle} data-testid="color-picker">
            <canvas ref={canvasRef} style={{ padding: 0 }}
                width={2 * RADIUS + MARGIN_INSIDE + TONE_PICKER_WIDTH} height={2 * RADIUS}
                onClick={canvasHandleClick}></canvas>
        </div>
    );

    return (
        <div ref={outerContainerRef} style={{ position: "relative", display: "inline-block" }}>
            <FlexHorizotalLabel>{props.label}
                <input id={props.label + "_input"} style={inputStyle} value={inputValue}
                    onFocus={() => setShow(true)} onBlur={changeColor} onChange={changeColor}></input>
                <div style={colorIndicatorSquareStyle} data-testid="color-indicator"></div>
            </FlexHorizotalLabel>
            {PickerJSX}
        </div>
    )
}

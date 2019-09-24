import React, { CSSProperties, useRef, useState, useEffect } from 'react'

interface Props {
    style?: CSSProperties,
    width: number,
    height: number,
    radius?: number,
    color?: string,
    callback?: (fns: {getImageData: () => ImageData}) => void,
    // styled-components
    className?: string
};

const Paint = (props: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    
    useEffect(() => {
        if (props.callback && canvasRef.current) {
            const getImageData = () => canvasRef.current!.getContext("2d")!.getImageData(0, 0, props.width, props.height);
            props.callback({getImageData});
        }
    }, [props.callback]);

    const getClickPosition = (e : React.MouseEvent<HTMLCanvasElement>) => {
        if (!canvasRef.current) throw new Error("Tried to get click position in non existent canvas element");
        const RECT = canvasRef.current.getBoundingClientRect();
        const canvasStyles = window.getComputedStyle(canvasRef.current);
        const paddingLeft = parseFloat(canvasStyles.getPropertyValue("padding-left"));
        const paddingTop = parseFloat(canvasStyles.getPropertyValue("padding-top"));
        const x = e.clientX - RECT.left - paddingLeft;
        const y = e.clientY - RECT.top - paddingTop;
        return {x, y};
    }
    const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const {x, y} = getClickPosition(e);
        drawCircle(x, y);
        setIsDragging(true);
    }
    const onMouseMove = !isDragging ? undefined : (e: React.MouseEvent<HTMLCanvasElement>) => {
        const {x, y} = getClickPosition(e);
        drawCircle(x, y);
    }
    const cancelDrag = () => {
        if (!isDragging) return;
        setIsDragging(false);
    }
    const drawCircle = (x: number, y: number) => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d")!;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.fillStyle = props.color || "black";
        ctx.arc(x, y, props.radius ? props.radius : 5, 0, 2*Math.PI);
        ctx.fill();
    }
    return (
        <canvas ref={canvasRef} onMouseDown={onMouseDown} onMouseUp={cancelDrag} onMouseLeave={cancelDrag} onMouseMove={onMouseMove}
        style={props.style} width={props.width} height={props.height} className={props.className}></canvas>
    );
};



export default Paint;
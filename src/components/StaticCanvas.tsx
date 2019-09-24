import React, { useRef, useEffect, CSSProperties } from 'react'


interface Props extends React.HTMLAttributes<HTMLCanvasElement> {
    imageData: ImageData,
    style?: CSSProperties
};

const StaticCanvas = (props: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {imageData, ...PROPS} = props;
    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d")!
            ctx.putImageData(imageData, 0, 0);
        }
    }, [canvasRef.current]);
    return (
        <canvas {...PROPS} width={imageData.width} height={imageData.height} ref={canvasRef}></canvas>
    );
};



export default StaticCanvas;
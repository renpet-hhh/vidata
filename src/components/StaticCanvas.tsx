import React, { useRef, CSSProperties } from 'react'
import useCanvasUpdate from '../hooks/useCanvasUpdate';


interface Props {
    imageData: ImageData,
    style?: CSSProperties
};

const StaticCanvas = (props: Props) => {
    const canvas = document.createElement("canvas");
    if (props.imageData) {
        canvas.height = props.imageData.height;
        canvas.width = props.imageData.width;
        const ctx = canvas.getContext("2d")!;
        ctx.putImageData(props.imageData, 0, 0);
    }
    const imgUrl = canvas.toDataURL();
    return (
        imgUrl ? <img style={props.style} src={imgUrl}></img> : null
    );
};



export default StaticCanvas;
import React, { CSSProperties, useRef, useState, useEffect, Ref, useImperativeHandle } from 'react'
import useStack from '../hooks/useStack';
import CanvasContext from '../utils/CanvasContext';
import { url } from 'inspector';
import rgbaToHex from '../utils/rgbaToHex';

export interface PaintMethods {
    getImageData: () => ImageData,
    undo: () => void,
    redo: () => void,
    clear: () => void
}

type ImageDataState = ImageData | "initial" | "blank";

interface Props {
    width: number,
    height: number,
    initialImageData?: ImageData,
    style?: CSSProperties,
    radius?: number,
    color?: string,
    mode?: "erase" | "getColor" | "normal" | "fill",
    listeners?: {
        getColor: (color: string) => void
    }
    // styled-components
    className?: string
};

const DEFAULTS : {mode: "normal", radius: 5, color: "black"} = {
    mode: "normal",
    radius: 5,
    color: "black"
}


/** A customizable canvas wrapper that draws upon mouse drags and clicks, with a drawing history 
 * 
 * You have access to imperative functions by `ref`:
 * ```
 * {
 *      getImageData, // get current imageData
 *      undo, // redraws to the state before the last drawing
 *      redo // redraws to the state before the last undo
 * }
 * ```
 * 
 * And access to other actions by `listeners`:
 * ```
 * {
 *      getColor // called when user clicks at Paint while 'mode' is 'getColor'
 * }
 * ```
 * 
 * @example
 * const Parent = () => {
 *      const paintRef = useRef<PaintMethods>(null);
 *      const undo = () => paintRef.current && paintRef.current.undo();
 *      const getColorListener = (color: string) => console.log("user selected " + color);
 *      return (
 *          <div>
 *              <Paint ref={paintRef} width={200} height={200} listeners={{getColor: getColorListener}}></Paint>
 *              <button onClick={undo}>Undo</button>
 *          </div>
 *      );
 * };
*/
const Paint = React.forwardRef((props: Props, ref : Ref<PaintMethods>) => {
    if (props.style && props.style.padding !== undefined) console.warn("Paint doesn't support padding. Drawing will be out of place");

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    /** Stack for REDO */
    const historyTrash = useStack<ImageDataState>();
    /** Stack for UNDO */
    const history = useStack<ImageDataState>();
    /** Current canvas image data
     * (canvas getImageData and putImageData in a stateful approach) */
    const [imageData, setImageData] = useState<ImageDataState>("initial");
    /** Blank ImageData */
    const blank = useRef<ImageData>();
    const CanvasCTXRef = useRef<CanvasContext>();

    const mode = props.mode !== undefined ? props.mode : DEFAULTS.mode;
    const radius = props.radius !== undefined ? props.radius : DEFAULTS.radius
    const color = props.color !== undefined ? props.color : DEFAULTS.color;

    const undo = () => {
        if (history.length() == 0) return;
        const last = history.pop()!;
        historyTrash.push(imageData);
        setImageData(last);
    }

    const redo = () => {
        if (historyTrash.length() == 0) return;
        const last = historyTrash.pop()!;
        history.push(imageData);
        setImageData(last);
    }

    const clear = () => {
        if (imageData === "blank") return;
        history.push(imageData);
        setImageData("blank");
    }

    const getCtxWrapper = () => {
        if (!CanvasCTXRef.current) {
            CanvasCTXRef.current = new CanvasContext(canvasRef.current!.getContext("2d")!, color, radius);
        }
        return CanvasCTXRef.current.update(color, radius);
    }

    /** Always use the `imageData` state hook when possible */
    const _getImageData = () => {
        if (canvasRef.current) {
            return canvasRef.current.getContext("2d")!.getImageData(0, 0, props.width, props.height);
        }
        throw new Error("Tried to get ImageData from an unmounted canvas");
    }

    /** Transforms `imageData` string values ("initial" and "blank") to a ImageData object
     * or returns `imageData` directly if it's already a ImageData */
    const getAsImageData = () => {
        if (blank.current === undefined) throw new Error("Couldn't get the blank ImageData, useEffect order might be wrong");
        if (imageData === undefined) throw new Error("imageData is unexpectedly undefined");
        return imageData === "initial" ? props.initialImageData || blank.current :
            imageData === "blank" ? blank.current : imageData;
    }

    /** Use initial canvas in browser to get blank ImageData (constructor not supported in NodeJS) */
    useEffect(() => {
        if (canvasRef.current) {
            blank.current = canvasRef.current.getContext("2d")!.getImageData(0, 0, props.width, props.height);
        }
    }, []);

    /** Enables canvas stateful approach.
     * Every time `imageData` changes, the canvas is redrawn
     */
    useEffect(() => {
        if (!canvasRef.current) return;
        canvasRef.current.getContext("2d")!.putImageData(getAsImageData(), 0, 0);
    }, [imageData]);

    /** Send imperative methods to parent */
    useImperativeHandle(ref, () => ({
        getImageData: getAsImageData,
        undo, redo, clear
    }), [imageData])


    const getClickPosition = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!canvasRef.current) throw new Error("Tried to get click position in non existent canvas element");
        const RECT = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - RECT.left;
        const y = e.clientY - RECT.top;
        return { x, y };
    }
    const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (mode === "normal" || mode === "erase") {
            history.push(imageData);
            historyTrash.reset();
            const { x, y } = getClickPosition(e);
            const ctxWrapper = getCtxWrapper();
            mode === "erase" ? ctxWrapper.eraseCircle(x, y) : ctxWrapper.drawCircle(x, y);
            setIsDragging(true);
        }
    }
    const onMouseMove = !isDragging ? undefined : (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (mode === "normal") {
            const { x, y } = getClickPosition(e);
            const ctxWrapper = getCtxWrapper();
            ctxWrapper.drawLineTo(x, y);
            ctxWrapper.drawCircle(x, y);
        } else if (mode === "erase") {
            const { x, y } = getClickPosition(e);
            const ctxWrapper = getCtxWrapper();
            ctxWrapper.eraseLineTo(x, y);
            ctxWrapper.eraseCircle(x, y);
        }
    }
    const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (mode === "getColor") {
            const { x, y } = getClickPosition(e);
            const ctxWrapper = getCtxWrapper();
            const color = ctxWrapper.getPixelColor(x, y);
            props.listeners && props.listeners.getColor(color);
        } else if (mode === "fill") {
            const { x, y } = getClickPosition(e);
            const ctxWrapper = getCtxWrapper();
        }
    }
    const cancelDrag = () => {
        if (mode === "normal" || mode === "erase") {
            if (!isDragging) return;
            setIsDragging(false);
            setImageData(_getImageData());
            const ctxWrapper = getCtxWrapper();
            ctxWrapper.resetPosition();
        }
    }

    const getColorBeingHovered = () => {
        if (!canvasRef.current) return "currentColor";
        const ctwWrapper = getCtxWrapper();
        const color = ctwWrapper.getPixelColor(x, y, "hex");

        return color === "#00000000" ? "#000000FF" : color;
    }
    
    const colorInHex = rgbaToHex(color);
    console.log(colorInHex);

    const cursorByMode : any = {
        getColor: `url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-dropper" class="svg-inline--fa fa-eye-dropper fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="${getColorBeingHovered()}" d="M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"></path></svg>`)}) 0 20, auto`,
        normal: `url(data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paint-brush" class="svg-inline--fa fa-paint-brush fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="${!colorInHex.includes("N") ? colorInHex : color}" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg>`)}) 0 20, auto`
    }
    const style : CSSProperties = Object.assign({
        cursor: cursorByMode[mode] || "auto"

    }, props.style);

    const mouseMoveMonitor = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const {x, y} = getClickPosition(e);
        setX(x);
        setY(y);
        onMouseMove && onMouseMove(e);
    }
    return (
        <canvas ref={canvasRef} onMouseDown={onMouseDown} onMouseUp={cancelDrag} onMouseLeave={cancelDrag}
            onMouseMove={mouseMoveMonitor} onClick={onClick}
            style={style} width={props.width} height={props.height} className={props.className}
                data-testid="Paint"></canvas>
    );
});



export default Paint;
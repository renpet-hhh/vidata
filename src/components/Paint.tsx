import React, { CSSProperties, useRef, useState, useEffect, Ref, useImperativeHandle } from 'react'
import useStack from '../hooks/useStack';
import CanvasContext from '../utils/CanvasContext';

export interface PaintMethods {
    getImageData: () => ImageData,
    undo: () => void,
    redo: () => void
}

interface Props {
    width: number,
    height: number,
    initialImageData?: ImageData,
    style?: CSSProperties,
    radius?: number,
    color?: string,
    mode?: "erase" | "getColor" | "normal",
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

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    /** Stack for REDO */
    const historyTrash = useStack<ImageData | undefined>();
    /** Stack for UNDO */
    const history = useStack<ImageData | undefined>();
    /** Current canvas image data
     * (canvas getImageData and putImageData in a stateful approach) */
    const [imageData, setImageData] = useState<ImageData>();
    /** Blank ImageData */
    const blank = useRef<ImageData>();
    const CanvasCTXRef = useRef<CanvasContext>();

    const mode = props.mode !== undefined ? props.mode : DEFAULTS.mode;
    const radius = props.radius !== undefined ? props.radius : DEFAULTS.radius
    const color = props.color !== undefined ? props.color : DEFAULTS.color;

    const undo = () => {
        if (history.length() == 0) return;
        const last = history.pop();
        historyTrash.push(imageData);
        setImageData(last);
    }

    const redo = () => {
        if (historyTrash.length() == 0) return;
        const last = historyTrash.pop();
        history.push(imageData);
        setImageData(last);
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
        if (!blank.current) {
            console.warn("Couldn't get the blank ImageData, useEffect order might be wrong");
            return;
        }
        if (imageData === undefined) {
            canvasRef.current.getContext("2d")!.putImageData(props.initialImageData || blank.current, 0, 0);
            return;
        }
        canvasRef.current.getContext("2d")!.putImageData(imageData, 0, 0);
    }, [imageData]);

    /** Send imperative methods to parent */
    useImperativeHandle(ref, () => ({
        getImageData: (() => {
            if (!blank.current) {
                throw new Error("Couldn't get the blank ImageData, useEffect order might be wrong");
            }
            return imageData || props.initialImageData || blank.current;
        }),
        undo, redo
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
    return (
        <canvas ref={canvasRef} onMouseDown={onMouseDown} onMouseUp={cancelDrag} onMouseLeave={cancelDrag}
            onMouseMove={onMouseMove} onClick={onClick}
            style={props.style} width={props.width} height={props.height} className={props.className}
                data-testid="Paint"></canvas>
    );
});



export default Paint;
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
    erase?: boolean,
    // styled-components
    className?: string
};

const DEFAULTS = {
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
 * @example
 * const Parent = () => {
 *      const paintRef = useRef<PaintMethods>(null);
 *      const undo = () => paintRef.current && paintRef.current.undo();
 *      return (
 *          <div>
 *              <Paint ref={paintRef} width={200} height={200}></Paint>
 *              <button onClick={undo}>Undo</button>
 *          </div>
 *      );
 * };
*/
const Paint = React.forwardRef((props: Props, ref : Ref<PaintMethods>) => {
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
        return new CanvasContext(canvasRef.current!.getContext("2d")!, color, radius);
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
        const canvasStyles = window.getComputedStyle(canvasRef.current);
        const paddingLeft = parseFloat(canvasStyles.getPropertyValue("padding-left")) || 0;
        const paddingTop = parseFloat(canvasStyles.getPropertyValue("padding-top")) || 0;
        const x = e.clientX - RECT.left - paddingLeft;
        const y = e.clientY - RECT.top - paddingTop;
        return { x, y };
    }
    const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        history.push(imageData);
        historyTrash.reset();
        const { x, y } = getClickPosition(e);
        const ctxWrapper = getCtxWrapper();
        props.erase ? ctxWrapper.eraseCircle(x, y) : ctxWrapper.drawCircle(x, y);
        setIsDragging(true);
    }
    const onMouseMove = !isDragging ? undefined : (e: React.MouseEvent<HTMLCanvasElement>) => {
        const { x, y } = getClickPosition(e);
        const ctxWrapper = getCtxWrapper();
        props.erase ? ctxWrapper.eraseCircle(x, y) : ctxWrapper.drawCircle(x, y);
    }
    const cancelDrag = () => {
        if (!isDragging) return;
        setIsDragging(false);
        setImageData(_getImageData());
    }
    return (
        <canvas ref={canvasRef} onMouseDown={onMouseDown} onMouseUp={cancelDrag} onMouseLeave={cancelDrag} onMouseMove={onMouseMove}
                style={props.style} width={props.width} height={props.height} className={props.className}
                data-testid="Paint"></canvas>
    );
});



export default Paint;
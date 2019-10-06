import { RefObject, useEffect } from "react";

const useCanvasUpdate = (canvasRef: RefObject<HTMLCanvasElement>, imageData?: ImageData, reUpdate?: boolean) => {
    useEffect(() => {
        if (canvasRef.current && imageData) {
            const ctx = canvasRef.current.getContext("2d")!
            ctx.putImageData(imageData, 0, 0);
        }
    }, [canvasRef.current, reUpdate ? imageData : undefined]);
};

export default useCanvasUpdate;
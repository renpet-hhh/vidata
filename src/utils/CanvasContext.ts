import rgbaToHex from "./rgbaToHex";

class CanvasContext {
    private ctx: CanvasRenderingContext2D;
    private color: string;
    private radius: number;
    private lastX?: number;
    private lastY?: number;

    constructor(ctx: CanvasRenderingContext2D, color: string, radius: number) {
        this.ctx = ctx;
        this.color = color;
        this.radius = radius;
    }

    resetPosition = () => {
        this.lastX = undefined;
        this.lastY = undefined;
        return this;
    }

    update = (color: string, radius: number) => {
        this.color = color;
        this.radius = radius;
        return this;
    }

    drawLineTo = (x: number, y: number) => {
        if (this.lastX === undefined || this.lastY === undefined) return this;
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2 * this.radius;
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        return this;
    }

    eraseLineTo = (x: number, y: number) => {
        if (this.lastX === undefined || this.lastY === undefined) return this;
        this.ctx.globalCompositeOperation = "destination-out";
        this.drawLineTo(x, y);
        this.ctx.globalCompositeOperation = "source-over";
        return this;
    }

    drawCircle = (x: number, y: number) => {
        // circle draw
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.lastX = x;
        this.lastY = y;
        return this;
    }

    eraseCircle = (x: number, y: number) => {
        this.ctx.globalCompositeOperation = "destination-out";
        this.drawCircle(x, y);
        this.ctx.globalCompositeOperation = "source-over";
        return this;
    }

    getPixelColor = (x: number, y: number, encode: "rgba" | "hex" = "rgba") => {
        const imgData = this.ctx.getImageData(x, y, 1, 1);
        const r = imgData.data[0];
        const g = imgData.data[1];
        const b = imgData.data[2];
        const a = imgData.data[3];
        if (encode === "rgba") {
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        } else if (encode === "hex") {
            return rgbaToHex(r, g, b, a);
        }
        throw new Error(`encoding ${encode} not supported`);
    }

    fill = (x: number, y: number) => {

    }
}

export default CanvasContext;

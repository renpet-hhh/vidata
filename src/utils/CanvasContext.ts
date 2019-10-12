class CanvasContext {
    private ctx : CanvasRenderingContext2D;
    private color: string;
    private radius: number;

    constructor(ctx : CanvasRenderingContext2D, color: string, radius: number) {
        this.ctx = ctx;
        this.color = color;
        this.radius = radius;
    }

    drawCircle = (x: number, y: number) => {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.fillStyle = this.color;
        this.ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    eraseCircle = (x: number, y: number) => {
        this.ctx.globalCompositeOperation = "destination-out";
        this.drawCircle(x, y);
        this.ctx.globalCompositeOperation = "source-over";
    }

    getPixelColor = (x: number, y: number) => {
        const imgData = this.ctx.getImageData(x, y, 1, 1);
        const r = imgData.data[0];
        const g = imgData.data[1];
        const b = imgData.data[2];
        const a = imgData.data[3];
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

export default CanvasContext;

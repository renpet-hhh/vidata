interface Overloads {
    (r: number, g: number, b: number, a?: number): string,
    (rgba: string): string
}
const rgbaToHex: Overloads = (rOrRgba: number | string, g?: number, b?: number, a: number = 255) => {
    if (typeof rOrRgba === "string") {
        console.log("rgba: " + rOrRgba);
        let rgba = rOrRgba.slice(rOrRgba.indexOf("(") + 1, rOrRgba.length - 1);
        let [r, g, b, a] = rgba.split(",");
        let hex_r = Number.parseFloat(r).toString(16);
        let hex_g = Number.parseFloat(g).toString(16);
        let hex_b = Number.parseFloat(b).toString(16);
        let hex_a = a === undefined ? "FF" : (Number.parseFloat(a) * 255).toString(16);
        if (hex_r.length === 1) hex_r = "0" + hex_r;
        if (hex_g.length === 1) hex_g = "0" + hex_g;
        if (hex_b.length === 1) hex_b = "0" + hex_b;
        if (hex_a.length === 1) hex_a = "0" + hex_a;
        return `#${hex_r}${hex_g}${hex_b}${hex_a}`;
    } else if (typeof rOrRgba === "number" && g !== undefined && b !== undefined && a !== undefined) {
        let hex_r = rOrRgba.toString(16);
        let hex_g = g.toString(16);
        let hex_b = b.toString(16);
        let hex_a = a.toString(16);
        if (hex_r.length === 1) hex_r = "0" + hex_r;
        if (hex_g.length === 1) hex_g = "0" + hex_g;
        if (hex_b.length === 1) hex_b = "0" + hex_b;
        if (hex_a.length === 1) hex_a = "0" + hex_a;
        return `#${hex_r}${hex_g}${hex_b}${hex_a}`;
    } else {
        throw new Error("Invalid arguments");
    }
}

export default rgbaToHex;
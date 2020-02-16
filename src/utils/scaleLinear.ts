type UnaryFunction<T, U> = (x: T) => U;

export interface Scale extends UnaryFunction<number, number> {
    domain: number[],
    range: number[],
    inverse: (y: number) => number
}

const scaleLinear = (domain: number[], range: number[]) => {
    let fn: any = (x: number) => (x - domain[0]) * (range[1] - range[0]) / (domain[1] - domain[0]) + range[0];
    fn.domain = domain;
    fn.range = range;
    fn.inverse = (y: number) => scaleLinear(range, domain)(y);
    let scaleFn: Scale = fn;
    return scaleFn;
}

export default scaleLinear;
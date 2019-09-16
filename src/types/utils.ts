export type Primitive = number | string | boolean | symbol | undefined | null;

export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
};

export type DeepRequired<T> = {
    [P in keyof T]-?: T[P] extends Primitive ? T[P] :
    T[P] extends Array<Primitive> ? T[P] :
    T[P] extends Function ? T[P] :
    DeepRequired<T[P]>

}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Primitive ? T[P] :
    T[P] extends Array<Primitive> ? T[P] :
    T[P] extends Function ? T[P] :
    DeepPartial<T[P]>

}





import { useRef } from "react"

const useStack = <T>() => {
    const stack = useRef<T[]>([]);
    const push = (value: T) => {
        stack.current.push(value);
    }
    const pop = () => {
        return stack.current.pop();
    }
    const reset = () => {
        stack.current = [];
    }
    const length = () => stack.current.length;
    return { push, pop, reset, length };
};

export default useStack;
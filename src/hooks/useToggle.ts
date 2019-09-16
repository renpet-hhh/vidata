import { useState } from "react";

interface Overloads {
    (initialState: boolean): [boolean, () => void],
    (initialState: 1 | 0): [1 | 0, () => void]
}

/** This hook is a special use of `useState` with the restriction that there are only two possible states
 * (1 or 0, true or false)
 * 
 * It returns `[value, toggle]`, where `value` is either 1 or 0 (if you use the number implementation)
 * or either true or false (using boolean implementation) and `toggle` is a function that
 * changes `value` to the only other possibility
 * 
 * Number or boolean implementation are chosen according to `initialState` type
 */
const useToggle: Overloads = (initialState: any): [any, () => void] => {
    const [value, setValue] = useState(initialState);
    if (typeof value === "boolean") {
        const toggle = () => {
            setValue(!value);
        }
        return [value, toggle];
    } else if (typeof value === "number") {
        if (value !== 1 && value !== 0) throw new Error("useToggle initial value must be either 1, 0, true or false");
        const toggle = () => {
            setValue(value === 1 ? 0 : 1);
        }
        return [value, toggle];
    }
    throw new Error("useToggle only supports number or boolean values");
};

export default useToggle;
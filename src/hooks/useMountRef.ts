import { useEffect, useRef } from "react";

/** Get a boolean mutable ref object that represents whether the component which called this hook is mounted */
const useMountRef = () => {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    }, []);
    return isMounted;
};

export default useMountRef;
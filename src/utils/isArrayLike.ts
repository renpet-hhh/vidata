const isArrayLike = <T>(item: ArrayLike<T>) => {
    return Array.isArray(item) ||
        (!!item && typeof item === "object" && typeof item.length === "number" &&
            (item.length === 0 || item.length > 0 && (item.length - 1) in item)
        );
};

export default isArrayLike;
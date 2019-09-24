import { useEffect, useLayoutEffect as _React_useLayoutEffect } from "react";

/** Hacky isomorphic hook to silence SSR warnings about useLayoutEffect from 'react' */
const useLayoutEffect = typeof window === "undefined" ? useEffect : _React_useLayoutEffect;

export default useLayoutEffect;
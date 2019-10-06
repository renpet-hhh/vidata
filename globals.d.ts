import { AppState } from "./src/store/configStore";

declare global {
    interface Window {
        /** True when the first hydration already occurred */
        __notFirstLoad: boolean,
        /** State sent by the server */
        __PRELOADED_STATE__: AppState
    }
}

export {};
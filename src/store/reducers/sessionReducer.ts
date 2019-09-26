import { AnyAction } from "redux";
import { UserInfo } from "../../types/Profile";
import { ServerSessionData } from "../../types/SessionData";
import { AppState } from "../configStore";

/** Initial state is given by the server, but the server uses this as reference */
const INITIAL_STATE: AppState['session'] = {
    logged: false
}

/**
 * Manages the state of session data (non account persistent data)
 */
const sessionReducer = (state = INITIAL_STATE, action: AnyAction): AppState['session'] => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, logged: true };
        case 'LOGOUT':
            return { ...state, logged: false };
        default:
            return state;
    }
}


export default sessionReducer;
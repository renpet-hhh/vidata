import { AnyAction } from "redux";
import { UserInfo } from "../../types/Profile";
import { ServerSessionData } from "../../types/SessionData";
import { AppState } from "../configStore";

/** initial state is given by the server, this is here just in case something really bad happens */
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
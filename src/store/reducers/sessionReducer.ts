import { AnyAction } from "redux";
import { AppState } from "../configStore";
import _ from 'lodash';
import isArrayLike from "../../utils/isArrayLike";

/** Initial state is given by the server, but the server uses this as reference */
const INITIAL_STATE: AppState['session'] = {
    logged: false,
    itemToBeEditedId: undefined
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
        case 'START_EDITING_COLLECTION':
            return {...state, itemToBeEditedId: action.id};
        case 'SAVE_COLLECTION':
            return {...state, itemToBeEditedId: undefined};
        default:
            return state;
    }
}


export default sessionReducer;
import { AppState } from "../configStore";
import { AnyAction } from "redux";
import _ from 'lodash';

/** Initial state is given by the server, but the server uses this as reference */
const INITIAL_STATE: AppState['profile'] = {
    username: "",
    email: "",
    bioText: "",
    lastModified: {
        avatar: 0
    },
    collection: [],
    awards: []
}

/**
 * Reducer for account persistent data
 */
const profileReducer = (state = INITIAL_STATE, action: AnyAction): AppState['profile'] => {

    switch (action.type) {
        case 'UPDATE':
            return _.mergeWith({}, state, action.merge, (value, srcValue, key, obj, source) => {
                if (Array.isArray(srcValue)) {
                    return srcValue;
                }
                return;
            });
        case 'LOGIN':
            return action.profile;
        case 'LOGOUT':
            return Object.assign({}, INITIAL_STATE);
        default:
            return state;
    }
}

export default profileReducer;
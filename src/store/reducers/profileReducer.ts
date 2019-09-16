import { AppState } from "../configStore";
import { AnyAction } from "redux";
import _ from 'lodash';

/** initial state is given by the server, this is here just in case something really bad happens */
const INITIAL_STATE: AppState['profile'] = {
    username: "",
    email: "",
    bioText: "",
    lastModified: {
        avatar: 0
    }
}

/**
 * Reducer for account persistent data
 */
const profileReducer = (state = INITIAL_STATE, action: AnyAction): AppState['profile'] => {

    switch (action.type) {
        case 'UPDATE':
            return _.mergeWith({}, state, action.merge, (value, srcValue, key, obj, source) => {
                /** For future customization */
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
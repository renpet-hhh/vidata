import { AppState } from "../configStore";
import { AnyAction } from "redux";
import _ from 'lodash';
import isArrayLike from "../../utils/isArrayLike";

/** Initial state is given by the server, but the server uses this as reference */
const INITIAL_STATE: AppState['profile'] = {
    username: "",
    email: "",
    bioText: "",
    lastModified: {
        avatar: 0
    },
    collection: {},
    awards: []
}

/**
 * Reducer for account persistent data
 */
const profileReducer = (state = INITIAL_STATE, action: AnyAction): AppState['profile'] => {

    switch (action.type) {
        case 'UPDATE':
            return _.mergeWith({}, state, action.merge, (value, srcValue, key, obj, source) => {
                /** default merge implementation assigns the source to an Array object instead
                 * of keeping its type */
                if (isArrayLike(srcValue)) {
                    return srcValue;
                }
            });
        case 'SAVE_COLLECTION':
            return { ...state, collection: { ...state.collection, [action.id]: action.data } };
        case 'LOGIN':
            return action.profile;
        case 'LOGOUT':
            return Object.assign({}, INITIAL_STATE);
        default:
            return state;
    }
}

export default profileReducer;
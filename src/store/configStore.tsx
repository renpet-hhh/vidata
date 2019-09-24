import { createStore, Store, AnyAction } from 'redux';
import rootReducer from './reducers/rootReducer';
import { ClientExclusiveSessionData } from '../types/SessionData';
import { UserInfo } from '../types/Profile';

export interface AppState {
    session: ClientExclusiveSessionData,
    /** When not logged in, this is an empty object
     * 
     * That's not noted in the type declaration because a lot of assertions would have to be done
     * in every logged in context, which happens way more often than
     * erroneous code trying to access profile info in a non logged in context.
     * 
     * **Just don't use this field in a non logged in context!**
     */
    profile: UserInfo
}

const configStore = (initialState?: AppState): Store<AppState> => {
    let isInClient = typeof window !== "undefined";
    const actionSanitizer = (action: AnyAction) => {
        const sanitizedAction = Object.assign({}, action);
        if (action.type === "UPDATE") {
            if (action.merge.collection) {
                sanitizedAction.merge.collection = [];
            }
        }
        if (action.type === "LOGIN") {
            if (action.profile.collection) {
                sanitizedAction.profile.collection = [];
            }
        }
        return sanitizedAction;
    }
    const stateSanitizer = (state: AppState) => {
        const sanitizedState : any = Object.assign({}, state);
        if (state.profile) {
            if (state.profile.collection) {
                sanitizedState.profile.collection = [];
            }
        }
        return sanitizedState;
    }
    const store: Store<AppState> = createStore(rootReducer, initialState,
        isInClient ?
        // @ts-ignore : Enables redux devtools extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({actionSanitizer, stateSanitizer}) : undefined);

    return store;
}

export default configStore;
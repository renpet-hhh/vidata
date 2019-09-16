import { createStore, Store } from 'redux';
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
    let isInClient = true;
    try {
        window;
        document;
    } catch (err) {
        isInClient = false;
    }
    const store: Store<AppState> = createStore(rootReducer, initialState,
        // @ts-ignore : Enables redux devtools extension
        isInClient ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);

    return store;
}

export default configStore;
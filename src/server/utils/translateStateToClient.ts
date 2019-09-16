import { Request } from "../../types/Request";
import { AppState } from "../../store/configStore";
import rootReducer from "../../store/reducers/rootReducer";
import _ from 'lodash';

/**
 * Translates the server side state (accessed via `req.session`) to the client side state (accessed via `props`)
 */
const translateStateToClient = async (req: Request): Promise<AppState> => {

    const url = req.originalUrl;
    const { profile, cookie, id, regenerate, destroy, save, touch, reload, _initialized, ...SESSION } = req.session;
    /* In the client, the store is ALWAYS created with an initialState provided by the server
     * which is exactly the state returned by this function. Therefore, the initial state provided by
     * the reducers 'session' and 'profile' are ALWAYS ignored in the client
     * and the SERVER is the one which MUST use it. Although not strictly needed, 
     * we are preloading the initial state of all other reducers too, for consistency */
    const defaultClientState = rootReducer(undefined, { type: '_dummy_' });
    const clientState = _.merge({}, defaultClientState, { session: SESSION, profile: profile });

    return clientState;
}


export default translateStateToClient;
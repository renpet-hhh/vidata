import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
    session: sessionReducer,
    profile: profileReducer
})
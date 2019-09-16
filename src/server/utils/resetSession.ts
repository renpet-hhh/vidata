import { ServerSessionData } from "../../types/SessionData";
import { Request } from "express";

export const initialSession: ServerSessionData = {
    logged: false,
    profile: null,
    _initialized: true
};

/** Mutates `req.session`, setting it to the initial session (not logged in) */
const resetSession = (req: Request) => {
    Object.assign(req.session, initialSession);
};

export default resetSession;
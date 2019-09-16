import { Request as ExpressRequest, NextFunction, Response } from "express";
import RequestErr from "../../constants/RequestErr";
import resetSession from "../utils/resetSession";

/** Guarantees that `req.session` is properly initialized and that `app` (express instance) is of type `App` */
const initSession = (req: ExpressRequest, res: Response, next: NextFunction) => {
    if (!req.session) {
        res.status(500).send(RequestErr.MONGOSTORE_DISCONNECTED);
        return;
    }
    if (!req.session._initialized) {
        resetSession(req);
    }
    next();
}

export default initSession;
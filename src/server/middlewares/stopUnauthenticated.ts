import { Request, Response, NextFunction } from "../../types/Request";
import RequestErr from "../../constants/RequestErr";

const stopUnauthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.logged) {
        res.status(401).send(RequestErr.USER_NOT_LOGGED_IN);
        return;
    }
    next();
};

export default stopUnauthenticated;
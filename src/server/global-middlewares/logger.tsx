import { NextFunction, Request, Response } from "express";
import Connection from "../mongodb/Connection";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    //console.log(req.headers.referer + " " + req.method + " " + req.originalUrl);
    //console.log(req.session!.username);
    next();
};
export default loggerMiddleware;
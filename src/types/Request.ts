import express from "express";
import { ServerSessionData } from "./SessionData";
import { PathParams } from "express-serve-static-core";
import createServer from "connect";

interface RequestWithSession extends express.Request {
    /**
     * This session object is guaranteed to have all fields declared in `SessionData`, because of the
     * global middleware `initSession`
     * */
    session: ServerSessionData & express.Request['session']
};


/** Same Request from express with extra typings for the `session` object */
export interface Request extends RequestWithSession { };

/** Same Response from express */
export interface Response extends express.Response { };

/** Same NextFunction from express */
export interface NextFunction extends express.NextFunction { };


export interface RequestHandler {
    (req: Request, res: Response, next?: NextFunction): any
}

export interface RequestMiddleware {
    (req: Request, res: Response, next: NextFunction): any
}

interface ErrorRequestHandler {
    (err: any, req: Request, res: Response, next?: NextFunction): any
}

type Handler = (RequestHandler | RequestMiddleware | ErrorRequestHandler | createServer.NextHandleFunction | express.RequestHandler);


interface IRouterMatcher {
    (path: PathParams, ...handlers: Handler[]): any
}

interface IRouterHandler {
    (...handlers: Handler[]): any
}


/**
 * Same type as the return of express(), but with the methods `get`, `post` and `use`
 * configured to accept the Request with the session already initialized
 */
export interface App extends Omit<ReturnType<typeof express>, "get" | "post" | "use"> {
    get: IRouterMatcher,
    post: IRouterMatcher,
    use: IRouterHandler & IRouterMatcher
}

import { Request, Response } from '../../../../../types/Request';
import Connection from '../../../../mongodb/Connection';
import RequestErr from '../../../../../constants/RequestErr';
import resetSession from '../../../../utils/resetSession';
import fetchSession from '../../../../utils/fetchSession';
import actionLogout from '../../../../../store/actions/common/actionLogout';
import actionLoginByReq from '../../../../../store/actions/common/actionLoginByReq';

/**
 * Adds a user account to the database, if requirements are met
 * 
 * Requirements:
 * - `req.body` must have the fields `username`, `password` and `email`
 * - `username` doesn't belong to an existing account
 * - `email` doesn't belong to an existing account
 * 
 * Responses (status : body):
 * - 200 : OK
 * - 422 : ALREADY_USED_USERNAME
 * - 422 : ALREADY_USED_EMAIL
 *   
 */
export const handleSignUp = async (req: Request, res: Response) => {
    const db = await Connection.get();
    const username = req.body.username;
    const password = req.body.password;
    try {
        await db.createUser(username, password, req.body.email);
    } catch (e) {
        res.status(422).send(e.message);
        return;
    }
    res.sendStatus(200);
}

/**
 * Sets a user as logged in (enabling the retrieval of information by other handlers0)
 * 
 * 
 * Responses (status : body : explanation):
 * - 200 : ***Dispatch Order***
 * - 400 : SYNTAX_ERROR
 * - 422 : AUTHENTICATION_FAILED
 * - 422 : CLIENT_SIDE_LOGIC_ERROR : User already logged in
 * - 500 : MONGOSTORE_DISCONNECTED
 * 
 *  */
export const handleSignIn = async (req: Request, res: Response) => {
    const db = await Connection.get();
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send(RequestErr.SYNTAX_ERROR);
        return;
    }
    if (req.session.logged) {
        // this should never execute, because the client shouldn't POST to login if
        // user is already logged in
        // route logic might be failing if that happens
        res.status(422).send(RequestErr.CLIENT_SIDE_LOGIC_ERROR);
        return;
    }
    const isAuthenticated = await db.authenticateUserByUsername(username, password);
    if (isAuthenticated) {
        req.session.logged = true; // user is marked as authenticated
        await fetchSession(req, username);
        res.status(200).send({ action: await actionLoginByReq(req) });
        return;
    }
    res.status(422).send(RequestErr.AUTHENTICATION_FAILED);
}

/**
 * Resets `req.session` if logged in
 * 
 * Responses (status : body):
 * - 200 : ***Dispatch Order***
 * - 422 : USER_NOT_LOGGED_IN : Can't destroy public session
 */
export const handleLogout = async (req: Request, res: Response) => {
    if (req.session.logged) {
        resetSession(req);
        res.status(200).send({ action: actionLogout() });
        return;
    };
    res.status(422).send(RequestErr.USER_NOT_LOGGED_IN);
}
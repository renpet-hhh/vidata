import { Request, Response } from '../../../../types/Request';
import Connection from '../../../mongodb/Connection';
import RequestErr from '../../../../constants/RequestErr';

/**
 * Check the existence of something in the database
 * 
 * Current available check types:
 * - username
 * 
 * Send a body in the following format:
 * 
 * {type: *one of check types above*, name: *query*}
 * 
 * Responses (status : body):
 * - 200 : *boolean*
 * - 400 : SYNTAX_ERROR
 * 
 * @example
 * // does username "abcde" exists?
 * // BODY
 * {type: "username", name: "abcde"}
 */
export const handleExists = async (req: Request, res: Response) => {
    if (req.body.type === "username" && req.body.name) {
        const db = await Connection.getDb();
        res.status(200).send(await db.userExists(req.body.name));
    } else {
        res.status(400).send(RequestErr.SYNTAX_ERROR);
    }
}
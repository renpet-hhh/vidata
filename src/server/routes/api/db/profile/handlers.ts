import { Request, Response } from '../../../../../types/Request';
import Connection from '../../../../mongodb/Connection';
import RequestErr from '../../../../../constants/RequestErr';
import { UserInfo } from '../../../../../types/Profile';
import actionUpdateProfile from '../../../../../store/actions/profile/actionUpdateProfile';

/**
 * Saves profile info (account persistent data)
 * 
 * Send a body in the {[key]: value} format for each `key` you want to update
 * 
 * 
 * Responses (status : body : explanation):
 * - 200 : ***Dispatch Order***
 * - 400 : CLIENT_SIDE_LOGIC_ERROR : User wasn't logged in
 * - 400 : SYNTAX_ERROR : Invalid keys
 * - 500 : MONGODB_ERROR
 */
export const handleSaveProfile = async (req: Request, res: Response) => {
    const db = await Connection.get();
    const validFields: (keyof UserInfo)[] = ["bioText", "awards", "collection"];
    let failed = false;
    for (const attr in req.body) {
        if (attr === "username") continue;
        if ((validFields as string[]).includes(attr)) {
            await db.saveProfile(req.session.profile!.username, { [attr]: req.body[attr] }).catch(() => { failed = true });
            // @ts-ignore
            req.session.profile[attr] = req.body[attr];
            continue;
        }
        res.status(400).send(RequestErr.SYNTAX_ERROR);
        return;
    }
    if (failed) {
        res.status(500).send(RequestErr.MONGODB_ERROR);
        return;
    }
    res.status(200).send({ action: await actionUpdateProfile(req.body) });
}

/**
 * Gets profile info (account persistent data)
 * 
 * Send a filter object to configure which fields to include or exclude (but not both),
 * in {[key]: 0 | 1 | boolean} format
 * 
 * * {key1: 0 | false, key2: 0 | false, ...} means you want all values but those of the specified keys
 * * {key1: 1 | true, key2: 1 | true, ...} means you want only the values of the specified keys
 * 
 * Keys must be those specified by the `UserInfo` type
 * 
 * Responses {status : body : explanation}:
 * - 200 : {...object with user info...}
 * - 400 : CLIENT_SIDE_LOGIC_ERROR
 * - 500 : USERNAME_NOT_FOUND : Unexpected, server's fault
 * 
 * 
 * @example
 * // HTTP BODY
 * {a: 1, c: 1} // works
 * // for profile {a: "a", b: "b", c: "c"} gets {a: "a", c: "c"}
 * // for profile {u: "u"} gets {}
 *
 * @example
 * // HTTP BODY
 * {a: 0, b: 0} // works
 * // for profile {a: "a", b: "b", c: "c"} gets {c: "c"}
 * // for profile {u: "u"} gets {u: "u"}
 * 
 * @example
 * // HTTP BODY
 * {a: 0, b: 1} // ERROR (no matter what the profile is)
 * 
 */
export const handleGetProfile = async (req: Request, res: Response) => {
    const db = await Connection.get();
    const user = await db.getProfile(req.session.profile!.username, req.body.filter);
    if (!user) {
        res.status(500).send(RequestErr.USERNAME_NOT_FOUND);
        return;
    }
    res.status(200).send(user);
}
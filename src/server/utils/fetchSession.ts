import Connection from "../mongodb/Connection";
import { Request } from "../../types/Request";
import { OutOfDBProfile } from "../../types/Profile";
import fs from 'fs';
import path from 'path';

/** 
 * Fetchs info from the database and the file system, mutating `req.session`
 */
const fetchSession = async (req: Request, username: string) => {
    if (!req.session.logged) throw new Error("Asked to fetch user info, but user is not logged in")
    const db = await Connection.get();
    let profile = await db.getProfile(username);
    if (profile) {
        console.log("fetchSession workspaceFolder:");
        console.log(global.__workspaceFolder);
        const outOfDBInfo: OutOfDBProfile = {
            lastModified: {
                avatar: fs.statSync(path.join(path.resolve(global.__workspaceFolder, "files/images/avatar"), `${profile.username}.jpeg`)).mtime.getTime()
            }
        }
        req.session.profile = { ...profile, ...outOfDBInfo }
    }
};

export default fetchSession;
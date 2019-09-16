import { Request, Response } from '../../../../../types/Request';
import { statSync } from 'fs';
import path from 'path';
import actionUpdateProfile from '../../../../../store/actions/profile/actionUpdateProfile';

/** Saves avatar image in the file system (files/images/avatar)
 * 
 * Actual save logic is done by `multer`
 * 
 * Responses (status : body : explanation):
 * - 200 : **Dispatch Order**
 */
export const handleSaveAvatar = async (req: Request, res: Response) => {
    const avatarPath = path.join(path.resolve(global.__workspaceFolder, 'files/images/avatar'), `${req.session.profile!.username}.jpeg`);
    const stats = statSync(avatarPath);
    const lastModifiedTime = stats.mtime.getTime();
    req.session.profile!.lastModified.avatar = lastModifiedTime;
    res.status(200).send({ action: actionUpdateProfile({ lastModified: { avatar: lastModifiedTime } }) });
}


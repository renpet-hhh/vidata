import { handleSaveAvatar } from './handlers';
import multer from 'multer'
import { App } from '../../../../../types/Request';
import stopUnauthenticated from '../../../../middlewares/stopUnauthenticated';


export default (app : App, upload: multer.Instance) => {

    app.post('/api/db/avatar/save', stopUnauthenticated, upload.single('file'), handleSaveAvatar);

}


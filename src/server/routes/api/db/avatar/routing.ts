import { handleSaveAvatar } from './handlers';
import multer, { MulterError } from 'multer'
import { App } from '../../../../../types/Request';
import stopUnauthenticated from '../../../../middlewares/stopUnauthenticated';

// it seems that tthe type Multer.Instance was removed from @types/multer, unfortunately 
export default (app: App, upload: any) => {

    app.post('/api/db/avatar/save', stopUnauthenticated, upload.single('file'), handleSaveAvatar);

}


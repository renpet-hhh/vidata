import express from 'express';
import { handleSaveProfile, handleGetProfile } from './handlers';
import { App } from '../../../../../types/Request';
import stopUnauthenticated from '../../../../middlewares/stopUnauthenticated';

export default (app: App) => {

    app.post('/api/db/profile/save', stopUnauthenticated, express.json(), handleSaveProfile);

    app.post('/api/db/profile/get', stopUnauthenticated, express.json(), handleGetProfile);

}
import express from 'express';
import { handleExists } from './handlers';
import { App } from '../../../../types/Request';

export default (app: App) => {

    app.post('/api/db/exists', express.json(), handleExists);

}
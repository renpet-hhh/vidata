import express from 'express';
import { handleSignUp, handleSignIn, handleLogout } from './handlers';
import { App } from '../../../../../types/Request';


export default (app: App) => {

    app.post('/api/db/session/signup', express.json(), handleSignUp);

    app.post('/api/db/session/signin', express.json(), handleSignIn);

    app.post('/api/db/session/logout', handleLogout);

}
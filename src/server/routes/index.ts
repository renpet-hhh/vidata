import express from 'express';
import multer from 'multer';
import path from 'path';

import api$db from './api/db/routing';
import api$db$session from './api/db/session/routing';
import api$db$profile from './api/db/profile/routing';
import api$db$avatar from './api/db/avatar/routing';

import loggerMiddleware from '../global-middlewares/logger';
import initSession from '../global-middlewares/initSession';
import serverRenderer from '../global-middlewares/serverRenderer';

import webpack, { Configuration } from 'webpack';
const webpackConfig : [Configuration, Configuration] = require('../../../webpack.config.js');
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import { App } from '../../types/Request';
import setStaticRoutes from '../global-middlewares/setStaticRoutes';


const setRoutes = (app: ReturnType<typeof express>, extra: {
    upload: multer.Instance
}) => {

    /**  Global middlewares */
    app.use(loggerMiddleware);
    app.use(initSession);  // after initSession the `req.session` is guaranteed to be initialized

    /** Static middlewares */
    setStaticRoutes(app as App);


    /** Global get responses */
    app.get('/favicon.ico', (req, res) => { res.sendStatus(200) });


    /** Each function below sets its own middlewares/handlers as needed
     * 
     * x$y$z means that the middlewares/handlers are mounted at '/x/y/z'
     *
     * Because of initSession, every request is guaranteed to have `req.session` initialized and, thus,
     * the express intance `app` can be assumed to be of type `App` (which considers session initialized
     * in the methods `get`, `put` and `use`)
     * 
     * If you know how to avoid this assertion and improve type safety, please do
     */
    api$db(app as App);
    api$db$session(app as App);
    api$db$profile(app as App);
    api$db$avatar(app as App, extra.upload);


    if (process.env.NODE_ENV === "development") {
        console.log("running in development");

        // webpack-dev-middleware connects this express server with the webpack bundle system,
        // enabling Hot Module Replacement
        const compiler = webpack(webpackConfig);
        const webpackDevMiddlewareInstance = webpackDevMiddleware(compiler, {
            publicPath: webpackConfig[0].output!.publicPath!, // from client webpack config
            serverSideRender: true
        })

        const clientCompiler = compiler.compilers.find(compiler => compiler.name === 'client');
        if (!clientCompiler) throw new Error(`Couldn't find webpack compiler with name "client"`);

        const weppackHotMiddlewareInstance = webpackHotMiddleware(clientCompiler);

        /** Serves client.js in memory, enables HMR */
        app.use(webpackDevMiddlewareInstance);

        /** Listens to changes in client.js bundle */
        app.use(weppackHotMiddlewareInstance);

        /** Updates serverRenderer to match the most recent client.js
         *  But does not listen to changes to server files, just the server side renderer */
        app.use(webpackHotServerMiddleware(compiler));
    } else if (process.env.NODE_ENV === "production") {
        console.log("running in production");

        app.use('/', express.static(path.resolve(global.__workspaceFolder, 'build')));
        app.use(serverRenderer as any);

    } else {
        throw new Error("process.env.NODE_ENV is neither development nor production and that error wasn't catched before this function")
    }
};


export default setRoutes;

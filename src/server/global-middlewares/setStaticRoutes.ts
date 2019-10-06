import { App, Request, Response, NextFunction } from "../../types/Request"
import express from 'express';
import path from 'path';


const setStaticRoutes = (app: App) => {

    app.use('/images/avatar', (req: Request, res: Response, next: NextFunction) => {
        res.header("Cache-Control", "max-age=8640000");
        let filename = req.url.replace(/\.v\.\w+(?=\.(?:jpe?g|png))/, "");
        const avatarPath = path.join(path.resolve(process.env.ROOT!, 'files/images/avatar'), filename);
        res.sendFile(avatarPath, (err) => {
            if (err) next();
        });
    }, (req: Request, res: Response) => {
        res.sendFile(path.resolve(process.env.ROOT!, 'files/images/avatar/__DEFAULT__.jpeg'));
    });

};

export default setStaticRoutes
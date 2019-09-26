import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import Connection from './mongodb/Connection';
import multer from 'multer';
import RequestErr from '../constants/RequestErr';
import setRoutes from './routes';
import '../../globals';


const MongoStore = connectMongo(session);

const diskStorage = multer.diskStorage({
    destination: 'files/images/avatar',
    filename: (req, file, cb) => {
        if (!req.session) {
            cb(new Error(RequestErr.MONGOSTORE_DISCONNECTED), "");
            return;
        }
        if (!req.session.profile.username) return;
        cb(null, `${req.session.profile.username}.jpeg`);
    }
})
const upload = multer({
    storage: diskStorage
});

const anyPreRequesiteIsMissing = () => {
    return (
        !process.env.SESSION_SECRET ||
        !process.env.MONGO_URI ||
        !Connection._BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase ||
        (process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "production")
    )
}

export const runServer = () => {
    Connection.initialize();

    const PORT = process.env.PORT || 6060;
    const app = express();

    if (anyPreRequesiteIsMissing()) throw new Error("A prerequesite is missing. Check function anyPreRequesiteIsMissing in server.tsx");

    app.use(cors({
        origin: "http://localhost"
    }));

    app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET!,
        store: new MongoStore({
            url: process.env.MONGO_URI!,
            dbPromise: Connection._BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase!,
            autoRemove: 'interval',
            autoRemoveInterval: 0.1,
            mongoOptions: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        })
    }));


    setRoutes(app, {
        upload
    });


    app.post(/\/.*/, (req, res) => res.status(404).send("Nope"));


    app.listen(PORT, () => {
        console.log("Listening on " + PORT + "...");
    })
}
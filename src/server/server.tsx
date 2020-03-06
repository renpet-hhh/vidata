import express from 'express';
import cors from 'cors';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import Connection from './mongodb/Connection';
import setRoutes from './routes/setRoutes';
import serverRenderer from './global-middlewares/serverRenderer';


const MongoStore = connectMongo(session);


const anyPreRequesiteIsMissing = () => {
    return (
        !process.env.PORT ||
        !process.env.SESSION_SECRET ||
        !process.env.MONGO_URI ||
        (process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== "production")
    )
}

export const runServer = () => {
    Connection.initialize();

    const PORT = Number.parseInt(process.env.PORT!);
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
            clientPromise: Connection.getClientPromise(),
            autoRemove: 'interval',
            autoRemoveInterval: 0.1,
            mongoOptions: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        })
    }));


    setRoutes(app);


    app.post(/\/.*/, (req, res) => res.status(404).send("Nope"));


    app.listen(PORT, () => {
        console.log("Listening on " + PORT + "...");
    })
}

// used by webpackHotServerMiddleware
export default serverRenderer;
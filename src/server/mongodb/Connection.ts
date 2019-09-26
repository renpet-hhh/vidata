import { MongoClient, Db } from 'mongodb';
import DbWrapper from './DbWrapper';

const connect = async (dbName: string) => {
    console.log("Trying to connect to MongoDB...");
    const client = await MongoClient.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Successfully connected to MongoDB");
    const db = client.db(dbName);
    return db;
}

/** The application connection to the MongoDB */
class Connection {
    private static _dbWrapper: Promise<DbWrapper> | null = null;
    /** Please update this description with the WHY and WHERE you are using this field
     * 
     * Current all uses of this field:
     * - Assigned to dbPromise field of MongoStore config options in src/server/server.tsx.
     * The Db instance could've been got by this Connection class,
     * the DbWrapper or another MongoClient#connect. A new client would start another connection, which we don't want.
     * Putting in Connection is clearer because its only use is `await Connection.get()`, while
     * the DbWrapper has a lot more complexity.
     *
    */
    static _BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase: Promise<Db> | null = null;

    /**
     * Initializes the static fields to Promises, should be called only once before using Connection#get
     */
    static initialize = () => {
        if (Connection._dbWrapper !== null) return console.warn("Tried to initialize an already established connection to the database");
        const db = connect('Vidata');
        Connection._dbWrapper = db.then(db => new DbWrapper(db));
        Connection._BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase = db;
    }

    /** 
    *  Returns a database wrapper around a unique connection that can be used for the entire application.
    * Must be called only if Connection#initialize was already called before.
    */
    static get = () => {
        if (Connection._dbWrapper === null) throw new Error("You must initialize before calling get");
        return Connection._dbWrapper;
    }
}

export default Connection;
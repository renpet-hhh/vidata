import { MongoClient, Db } from 'mongodb';
import DbWrapper from './DbWrapper';

const connect = async () => {
    console.log("Trying to connect to MongoDB...");
    const client = await MongoClient.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("Successfully connected to MongoDB");
    return client;
}

/** The application connection to the MongoDB */
class Connection {
    private static client: Promise<MongoClient> | null = null;
    private static dbWrapper: Promise<DbWrapper> | null = null;

    /**
     * Initializes the static fields to Promises, should be called only once before using Connection#get
     */
    static initialize = () => {
        if (Connection.client !== null) return console.warn("Tried to initialize an already established connection to the database");
        Connection.client = connect();
        Connection.dbWrapper = Connection.client.then(client => new DbWrapper(client.db('Vidata')));
    }

    /** 
    *  Returns a database wrapper around a unique connection that can be used for the entire application.
    * Must be called only if Connection#initialize was already called before.
    */
    static getDb = () => {
        if (Connection.client === null || Connection.dbWrapper === null) throw new Error("You must initialize before calling getDb");
        return Connection.dbWrapper;
    }

    static getClientPromise = () => {
        if (Connection.client === null) throw new Error("You must initialize before calling getClientPromise");
        return Connection.client;
    }
}

export default Connection;
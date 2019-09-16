import { Db, Collection } from "mongodb";
import { hash, compare } from 'bcrypt';
import RequestErr from "../../constants/RequestErr";
import { DBProfile } from "../../types/Profile";
import { DeepPartial } from "../../types/utils";

/** A wrapper with applied business logic and extra safety around the Db instance */
export default class DbWrapper {
    private _db: Db;
    private _users: Collection<DBProfile>;


    constructor(db: Db) {
        this._db = db;
        this._users = db.collection('Users');
    }


    userExists = async (username: string) => {
        if (!username) throw new Error("Argument is undefined/null or it's an empty string");
        const result = (await this._users.countDocuments({ username: username })) > 0;
        return result;
    }

    emailExists = async (email: string) => {
        const result = (await this._users.countDocuments({ email: email })) > 0;
        return result;
    }

    createUser = async (username: string, password: string, email: string) => {
        console.log("creating user... " + username);
        const userExistsInDB = await this.userExists(username);
        if (userExistsInDB) throw new Error(RequestErr.ALREADY_USED_USERNAME);
        const emailExistsInDB = await this.emailExists(email);
        if (emailExistsInDB) throw new Error(RequestErr.ALREADY_USED_EMAIL);
        console.log("hashing password...");
        const hashedPassword = await hash(password, 10);
        this._users.insertOne({ username: username, password: hashedPassword, email: email, bioText: "" });
        console.log("created!");
        return true;
    }

    /**
     * Whether the credentials are valid
     */
    authenticateUserByUsername = async (username: string, password: string) => {
        if (!username || !password) return false;
        console.log("authenticating " + username);
        const userInDB = await this._users.findOne({ username: username }, { projection: { password: 1 } });
        if (userInDB === null) return false;
        return await compare(password, userInDB.password);
    }

    /**
     * Whether the credentials are valid
     */
    authenticateUserByEmail = async (email: string, password: string) => {
        if (!(email || password)) return false;
        console.log("authenticating " + email);
        const userInDB = await this._users.findOne({ email: email }, { projection: { password: 1 } });
        if (userInDB === null) return false;
        return await compare(password, userInDB.password);
    }


    /**
     * Saves top level user data (not nested)
     * 
     * Can't edit username, password and email
     */
    saveProfile = async (username: string | undefined, data: DeepPartial<DBProfile>) => {
        if (!username) return;
        const result = await this._users.updateOne({ username: username }, {
            $set: data
        });
        if (result.matchedCount === 0) throw new Error(RequestErr.USERNAME_NOT_FOUND);
        console.log(result);
    }

    /**
     * Gets a user profile (except their password)
     */
    getProfile = async (username: string | undefined, filter?: { [key: string]: 0 | 1 | boolean }): Promise<Omit<DBProfile, "_id" | "password"> | null> => {
        const user = await this._users.findOne({ username: username }, {
            projection: filter
        });
        if (!user) return null;
        const info: DBProfile = Object.assign({}, user);
        delete info.password;
        delete info._id
        return info;
    }

    removeInfoFromProfile = async (username: string | null, toRemove: (keyof DBProfile)[]) => {
        const unsetObject: { [key: string]: "" } = {};
        for (const key of toRemove) {
            unsetObject[key] = "";
        }
        if (username) {
            await this._users.updateOne({ username }, {
                $unset: unsetObject
            });
        } else {
            // removing info from ALL profiles
            await this._users.updateMany({}, {
                $unset: unsetObject
            });
        }
    }

}
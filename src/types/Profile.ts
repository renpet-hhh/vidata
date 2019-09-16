export interface DBProfile {
    _id: string,
    username: string,
    password: string,
    email: string,
    bioText: string,
    collections?: any,
    awards?: any
}

export interface OutOfDBProfile {
    lastModified: {
        avatar: number
    }
}

export interface UserInfo extends Omit<DBProfile & OutOfDBProfile, "_id" | "password"> { };

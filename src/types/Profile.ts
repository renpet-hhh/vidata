export interface DBProfile {
    username: string,
    password: string,
    email: string,
    bioText: string,
    collection: { [id: string]: Uint8ClampedArray },
    awards: any[]
}

export interface OutOfDBProfile {
    lastModified: {
        avatar: number
    }
}

export interface UserInfo extends Omit<DBProfile & OutOfDBProfile, "password"> { };

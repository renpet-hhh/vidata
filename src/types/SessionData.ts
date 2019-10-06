import { UserInfo } from "./Profile";

/** Non-account-persistent data exclusivet to the client side */
export interface ClientExclusiveSessionData {
    /** Whether the user is logged in */
    logged: boolean,
    itemToBeEditedId?: string
}


/** Session persistent info in the server side (accessed via `req.session`)
 * 
 * Although info in this object is persistent until the session ends, it contains info that is account persistent
 * (stored in the database)
 * 
 * `req.session.profile` has its fields fetched from the database and the file system
 * and thus represent persistent data
 *
 */
export interface ServerSessionData extends ClientExclusiveSessionData {

    /**
     * Holds all persistent info specific to a user fetched from the database
     * 
     * It MUST be safe to assume that if `req.session.logged === true`, then `req.session.profile !== null`
     * 
     * This object is only updated when needed, thus avoiding unnecessary fetchs to the database, by using
     * `fetchSession`
     *
     */
    profile: UserInfo | null,
    /** **PRIVATE** flag set by the initializer
     * 
     * It shouldn't be manually set to false, use the initializer `resetSession` instead if you
     * need the session to be reset
     *
     */
    readonly _initialized: true
}
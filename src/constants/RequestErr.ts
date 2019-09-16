/** 
 * @module RequestErr
 * 
 * Errors that happened while the server was trying to handle the request
 * 
 * The server always responds with one of these as the response body if an error occurs
 */

export default {
    SYNTAX_ERROR: JSON.stringify('SYNTAX_ERROR'),
    ALREADY_USED_USERNAME: JSON.stringify('ALREADY_USED_USERNAME'),
    USERNAME_NOT_FOUND: JSON.stringify('USERNAME_NOT_FOUND'),
    EMAIL_NOT_FOUND: JSON.stringify('EMAIL_NOT_FOUND'),
    ALREADY_USED_EMAIL: JSON.stringify('ALREADY_USED_EMAIL'),
    UNKNOWN_ERROR: JSON.stringify('UNKNOWN_ERROR'),
    MONGODB_ERROR: JSON.stringify('MONGODB_ERROR'),
    MONGOSTORE_DISCONNECTED: JSON.stringify('MONGOSTORE_DISCONNECTED'),
    INVALID_MONGOSTORE_URI: JSON.stringify('INVALID_MONGOSTORE_URI'),
    AUTHENTICATION_FAILED: JSON.stringify('AUTHENTICATION_FAILED'),
    USER_LOGGED_IN: JSON.stringify('USER_LOGGED_IN'),
    USER_NOT_LOGGED_IN: JSON.stringify('USER_NOT_LOGGED_IN'),
    CLIENT_SIDE_LOGIC_ERROR: JSON.stringify('CLIENT_SIDE_LOGIC_ERROR'),
    SERVER_SIDE_LOGIC_ERROR: JSON.stringify('SERVER_SIDE_LOGIC_ERROR')
}

declare module NodeJS {
    interface Global {
        __workspaceFolder: string
    }
}
//"C:\\Users\\renan\\OneDrive\\Documentos\\React\\VidataUniversal"
global.__workspaceFolder = require('path').resolve();
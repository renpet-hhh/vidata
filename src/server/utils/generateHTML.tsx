import globalStyle from "../../globalStyle";

/** 
 * Generates markup to be sent to the client with preloaded HTML, CSS and state
 */
const generateHTML = (reactString: string, styles: string, preloadState: string) => {
    return (`
        <!DOCTYPE html>
        <html>
            <head>
                <style>${globalStyle}</style>
                ${styles}
                <script>${preloadState}</script>
                <script src="/client.js"></script>
            </head>
            <body>
                <div id="root">${reactString}</div>
            <body>
        </html>
    `);
}

export default generateHTML;
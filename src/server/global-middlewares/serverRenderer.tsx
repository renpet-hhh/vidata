import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router";
import App from "../../App";
import { Provider } from "react-redux";
import generateHTML from '../utils/generateHTML';
import { ServerStyleSheet } from 'styled-components';
import { Response } from 'express';
import configStore from '../../store/configStore';
import translateStateToClient from '../utils/translateStateToClient';
import { Request } from '../../types/Request';

/** Main response from the server
 * 
 * This handler sends HTML to the client
 * 
 * Responses (status : body):
 * - 200 : *HTML*
 */
const serverRenderer = () => async (req: Request, res: Response) => {
    const context = {};
    const sheet = new ServerStyleSheet();

    const store = configStore(await translateStateToClient(req));
    const AppWrapper = <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
            <App></App>
        </StaticRouter>
    </Provider>;

    const preloadedState = store.getState();
    const preloadedStateString: string = JSON.stringify(preloadedState).replace(/</g, '\\\\u003c');
    const preloadScript: string = `window.__PRELOADED_STATE__ = ${preloadedStateString};
    window.addEventListener('keydown', e => {if (e.keyCode === 123) debugger;});`;

    let markup;
    try {
        markup = ReactDOMServer.renderToString(sheet.collectStyles(AppWrapper));
    } catch (e) {
        console.error(e);
    } finally {
        sheet.seal();
    }

    res.status(200).send(generateHTML(markup || "", sheet.getStyleTags(), preloadScript));
}

export default serverRenderer;
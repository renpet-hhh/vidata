import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

// @ts-ignore
const store = configStore(window.__PRELOADED_STATE__);
// @ts-ignore
delete window.__PRELOADED_STATE__;


document.addEventListener('DOMContentLoaded', () => {
    const RootWithLoadedState = (<Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>);
    ReactDOM.hydrate(RootWithLoadedState, document.getElementById("root"))
});




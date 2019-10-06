import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';


const store = configStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;


const hydrate = () => {
    const RootWithLoadedState = (<Provider store={store}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </Provider>);
    ReactDOM.hydrate(RootWithLoadedState, document.getElementById("root"))
}

if (module.hot) {
    module.hot.accept('./App', () => {
        console.log("Change detected, re-hydrating...");
        hydrate();
    })
}


document.addEventListener('DOMContentLoaded', () => {
    if (!window.__notFirstLoad) {
        console.log("Hydrating for the first time");
        hydrate();
        window.__notFirstLoad = true;
    }
});





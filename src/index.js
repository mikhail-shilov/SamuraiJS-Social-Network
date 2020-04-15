import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

import './index.css';
import store from './redux/store'
import App from './App';

const updateDOM = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

updateDOM(store.getState());
debugger;

store.subscribe(() => {
    const state = store.getState();
    updateDOM(state);
});
debugger;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

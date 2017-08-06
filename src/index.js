import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,
    Route,
    Link, } from 'react-router-dom';
import './index.css';
import Home from './views/pages/MainPage/Home';
import MainPage from './views/pages/MainPage/MainPage';

import registerServiceWorker from './registerServiceWorker';

import App from './views';

const ZongioApp = () => (
    <Router>
        <App/>
    </Router>
);

ReactDOM.render(<ZongioApp />, document.getElementById('root'));
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './views';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyARcCSN5Dnov7wkKWJlaRuG37T3tx250_A",
    authDomain: "zongio-1a8a4.firebaseapp.com",
    databaseURL: "https://zongio-1a8a4.firebaseio.com",
    projectId: "zongio-1a8a4",
    storageBucket: "zongio-1a8a4.appspot.com",
    messagingSenderId: "575693508478"
};
firebase.initializeApp(config);

const ZongioApp = () => (
    <Router>
        <App/>
    </Router>
);

ReactDOM.render(<ZongioApp />, document.getElementById('root'));
registerServiceWorker();
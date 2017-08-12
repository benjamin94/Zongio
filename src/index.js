import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './views';

const ZongioApp = () => (
    <Router>
        <App/>
    </Router>
);

ReactDOM.render(<ZongioApp />, document.getElementById('root'));
registerServiceWorker();
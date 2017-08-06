import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,
    Route,
    Link, } from 'react-router-dom';

import BasicExample from '../../components/BasicExample';
import Slave from '../../components/Slave';

export default class Home extends React.Component{

    render() {
        return (
            <Router>
                <div>
                    <h1>Hello says Home</h1>
                    <ul>
                        <li>
                            <Link to={`/invention/somethingRandom${123}`}>
                                Im a component
                            </Link>
                        </li>
                        <li>
                            <Link to='/invention/theBestPlaceEver'>
                                Im the second component
                             </Link>

                        </li>
                        <li>
                            <Link to='/invention/chilling'>
                                Im just chilling
                            </Link>
                        </li>
                    </ul>

                    <Route path='/invention/:quePex' component={Slave}/>
                    <Route exact={true} path='/invention/chilling' component={BasicExample}/>
                    
                </div>
            </Router>
                );
    }

} 
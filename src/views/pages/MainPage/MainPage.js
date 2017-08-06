import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,
    Route,
    Link, } from 'react-router-dom';

import BasicExample from '../../components/BasicExample';
import Slave from '../../components/Slave';
import SongList from '../../components/SongList';

export default class MainPage extends React.Component{

    render() {
        return (
            <div>
                <p>Look for your fav song!</p>
                <p>if its not there , be the one who creates it</p>
                <button
                    icon="add"
                    label="Add a song"
                    flat
                    primary
                />

                <SongList/>

            </div>
        );
    }

} 
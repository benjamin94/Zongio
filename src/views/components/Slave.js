import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router ,
    Route,
    Link, } from 'react-router-dom'

export default class Slave extends React.Component{

    constructor(){
        super();
        this.state = {
            extraction: 123,
            gists: null,
        }
    }

    componentDidMount(){
    
        fetch('https://api.github.com/gists')
            .then(res => res.json())
            .then(gists => {this.setState({gists})})
    }

    render() {
        return (
            <div>
                {this.props.match.params.quePex}
                {this.state.extraction}
            </div>
                );
    }

} 
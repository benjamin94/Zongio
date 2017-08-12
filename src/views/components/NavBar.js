import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <nav className="nav has-shadow">
                    <div className="nav-left">
                        <NavLink className="nav-item" to="/Home">
                            helloo
                        </NavLink>
                    </div>
                    <NavLink className="nav-item is-hidden-tablet" to="/search">
                        <span className="icon">ghj
                            <i className="fa fa-search">joy</i>
                        </span>
                    </NavLink>
                    <NavLink className="nav-item is-hidden-tablet" to="/chat">
                        <span className="icon">
                            <i className="fa fa-comments"></i>
                        </span>
                    </NavLink>

                </nav>
            </div>
        );
    }
}

export default NavBar;
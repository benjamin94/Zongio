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
                        <NavLink className="nav-item" to="/">
                            I'm so cool
                        </NavLink>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
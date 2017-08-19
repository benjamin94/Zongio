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
                <nav className="navbar has-shadow background-main">
                    <div className="navbar-brand">
                        <NavLink className="nav-item" to="/">
                        Zongio
                        </NavLink>

                        <div className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}



// <nav className="nav has-shadow">
// <div className="nav-left">
//     <NavLink className="nav-item" to="/">
//         I'm so cool
//     </NavLink>
// </div>
// </nav>


export default NavBar;
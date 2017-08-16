import React from "react";
import { Route } from "react-router-dom";
import routes from "../config/routes"

import NavBar from "./components/NavBar";

import 'bulma/css/bulma.css';

const App = () => (
    <div>
        <section className="hero is-medium">
            <div className="hero-head">
                <header>
                    <NavBar />
                </header>
            </div>
        </section>

        <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
        
        { routes.map((route) => <Route key={route.path} { ...route } />) }

        <div className="credits has-text-centered has-text-white">
            &copy;2017 Brain Leader Company Ltd. All rights reserved.
        </div>
        
    </div>
);

export default App;
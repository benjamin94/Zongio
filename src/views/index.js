import React from "react";
import { Route } from "react-router-dom";
import routes from "../config/routes"

const App = () => (
    <div>
        { routes.map((route) => <Route key={route.path} { ...route } />) }
        <div className="credits has-text-centered has-text-white">
            &copy;2017 Zongio Pvt. Ltd. All rights reserved.
        </div>
    </div>
);

export default App;
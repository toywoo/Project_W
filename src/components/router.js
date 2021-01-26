import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState();

    return(
        <Router>
            <Switch>
                {isLoggedIn ? <> <Route><Home exact path = "/" /></Route> </> : 
                   <> <Route><Auth exact path = "/" /></Route> </>}
            </Switch>
        </Router>
    )
}
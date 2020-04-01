import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import Login from "./login";
import SignUp from "./sign-up";

const AuthRoutes = () => {
    let match = useRouteMatch();
    return (
            <Switch>
                <Route path={`${match.path}/login`}>
                    <Login/>
                </Route>
                <Route path={`${match.path}/signup`}>
                    <SignUp/>
                </Route>
                <Route path={match.path}>
                    <h3>Please Go for login.</h3>
                </Route>
            </Switch>
    )
};

export default AuthRoutes;

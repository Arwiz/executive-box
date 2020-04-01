import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import AuthRoutes from "../pages/auth";
import DashboardRoutes from "../pages/template-master";
import AuthGuard from "./auth-gaurd";
import MainLayout from "../_shared/components/MainLayout";

const NotFound = () => {
    return <h2>404</h2>;
}
const LandingPage = () => {
    return <h2>Go To Dashboard</h2>;
}

function Routes() {
    return (
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <AuthGuard>
                            <DashboardRoutes/>
                        </AuthGuard>
                    </Route>
                    <Route path="/auth">
                        <AuthRoutes/>
                    </Route>
                    <Route path="/" exact>
                        <LandingPage/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
    );
}

export default Routes;

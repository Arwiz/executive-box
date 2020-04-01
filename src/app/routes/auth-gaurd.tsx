import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import authService from '../_services/auth-service';

const AuthGuard : React.FC<{}> = ({ children, ...rest}) =>  {
    return (
        <Route
            {...rest}
            render={({location}) =>
                authService.getLoggedIn() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export default AuthGuard;

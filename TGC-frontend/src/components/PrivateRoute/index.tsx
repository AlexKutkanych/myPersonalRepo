import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }: any) => {
    const { userToken }: any = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userToken?.accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
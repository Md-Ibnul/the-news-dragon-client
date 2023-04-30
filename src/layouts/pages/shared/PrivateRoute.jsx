import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log("user in route", user);

    if(loading){
        return <Spinner animation="border" variant="info" />
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={{from: location}} replace/>
    }
};

export default PrivateRoute;
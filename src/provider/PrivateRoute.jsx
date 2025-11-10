import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Loading></Loading>;
    }
    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to="/auth/sign-in"></Navigate>
    }
};

export default PrivateRoute;
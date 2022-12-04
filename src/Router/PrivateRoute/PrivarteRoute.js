import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivarteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <h1 className='text-5xl'> loading........</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ form: location }} replace ></Navigate>

};

export default PrivarteRoute;
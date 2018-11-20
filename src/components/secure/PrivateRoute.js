import React from 'react'
import { Route, Redirect } from 'react-router-dom';

import authService from '../../services/authService'

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} 
    render={(props)=>(
        authService.isAuthenticated()
        ? <Component {...props}/>
        : <Redirect to={
            {
                pathname:'/login',
                state: { target:props.location }
            }    
        }/>
    )}/>
}

export default PrivateRoute
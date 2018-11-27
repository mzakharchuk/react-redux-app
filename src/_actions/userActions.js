import * as types from '../types'
import {authHeader,handleResponse} from '../_helpers'

export function register(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

     return dispatch => {
        return fetch(`/users/register`,requestOptions)
        .then(user => {
            dispatch(registerSuccess(user))
        }).catch(error=>{
            throw(error)
        })
     }

    function registerSuccess(user){ return { type:types.USER_REGISTER_SUCCESS, user } }
}


export function getAllUsers(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return dispatch =>{
        return fetch('/users',requestOptions)
        .then(handleResponse)
        .then(users =>{
            dispatch(loadUsersSuccess(users))
        })
        .catch(error =>{
            throw(error)
        })
    }
    function loadUsersSuccess(users){ return { type:types.LOAD_USERS_SUCCESS, users } }
}



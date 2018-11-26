import * as types from '../types'
import authorizationApi from '../api/mockAuthorization'


export function signIn({login,password}){
     return dispatch => {
            return authorizationApi.login(login,password)
            .then(user => {
                dispatch(loginSuccess(user))
                localStorage.setItem('user', JSON.stringify(user));
            }).catch(error=>{
                throw(error)
            })
     }
     function loginSuccess(user){
        return { type:types.USER_LOGIN_SUCCESS, user }
    }
    function loginSuccess(user){
        return { type:types.USER_LOGIN_FAILD, user }
    }
}
export function  singOut(){
    return function(dispatch){
        return authorizationApi.logout()
        .then(user =>{
            dispatch(logoutSuccess())
            localStorage.removeItem('user')
        })
    }
}

function logoutSuccess(){
    return { type:types.USER_LOGOUT }
}
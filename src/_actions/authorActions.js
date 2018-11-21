import * as types from '../types'
import authorApi from '../api/mockAuthorApi'

export function loadAuthorSuccess(authors){
    return { type: types.LOAD_AUTHOR_SUCCESS, authors}
}
export function loadAuthors(){
    return function(dispatch){
        return authorApi.getAllAuthors().then(data => {
            dispatch(loadAuthorSuccess(data))
        }).catch(error => {
            throw(error)
        })
    }
}

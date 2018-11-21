import * as types from '../types'

export default function authorReducer(state=[], action){
    switch(action.type){
        case types.LOAD_AUTHOR_SUCCESS:
        return action.authors
        default:
         return state
    }
}
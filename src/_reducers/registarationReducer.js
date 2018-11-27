import * as types from '../types'

export default function registerReducer(state={}, action){
    switch(action.type){
        case types.USER_REGISTER_SUCCESS:
            return {}
        default:
            return state
    }
}
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import courses from './courseReducer'
import authors from './authorReducer'
import authReducer from './authReducer'
import registerReducer from './registarationReducer'
import users from './userReducer'


const rootReducer = combineReducers({
    courses,
    authors,
    users,
    router:routerReducer,
    registration:registerReducer,
    authentication: authReducer
})

export default rootReducer
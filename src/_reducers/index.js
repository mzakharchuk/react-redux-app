import {combineReducers} from 'redux'
import courses from './courseReducer'
import authors from './authorReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    courses,
    authors,
    authentication: authReducer
})

export default rootReducer
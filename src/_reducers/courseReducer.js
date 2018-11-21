import * as types from '../types'

export default function courseReducer(state=[], action){
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses
        case types.CREATE_COURSE_SUCCESS:
            return [...state, action.course]        
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(c => c.id !== action.course.id), action.course ]
        default:
            return state
    }
}
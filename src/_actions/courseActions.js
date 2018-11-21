import * as types from '../types'
import courseApi from '../api/mockCourseApi'

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(data => {
            dispatch(loadCoursesSuccess(data))
        }).catch(error => {
            throw(error)
        })
    }
}

export function saveCourse(course){
    return function(dispatch,getState){
        return courseApi.saveCourse(course).then(data => {
            course.id 
            ? dispatch(updateCourseSuccess(data))
            : dispatch(createCourseSuccess(data))
        }).catch(error => {
            throw(error)
        })
    }
}

export function loadCoursesSuccess(courses){
    return { type: types.LOAD_COURSES_SUCCESS, courses}
}
export function updateCourseSuccess(course){
    return { type: types.UPDATE_COURSE_SUCCESS, course}
}
export function createCourseSuccess(course){
    return { type: types.CREATE_COURSE_SUCCESS, course}
}
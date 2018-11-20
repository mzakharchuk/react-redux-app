import * as types from '../types'

export function createCourse(course){
    return { type: types.CREATE_COURSE, course}
}
import * as courseActions from '../../_actions/courseActions'
import * as types from '../../types'

describe('Course Actions', function () {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
        //  arrange
        const course = {id:'course-code',title:'armagedon'}
        const expectedAction = {
            type: types.CREATE_COURSE_SUCCESS,
            course
        }
        // act
        const action = courseActions.createCourseSuccess(course)

        //  assert
        expect(action).toEqual(expectedAction)
    });
})

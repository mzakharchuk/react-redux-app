import courseReducer from '../../_reducers/courseReducer'
import * as courseActions from '../../_actions/courseActions'

describe('Course Reducer', function () {

    it('should create course when passed CREATE_COURSE_SUCCESS', () => {
        //  arrange
        const iniState = [{title:'a'},{title:'b'}]
        const course = {title:'armagedon'}
       
        const action = courseActions.createCourseSuccess(course)

         // act
        const newState = courseReducer(iniState,action)

        //  assert
        expect(newState.length).toEqual(3)
        expect(newState[2].title).toEqual('armagedon')
    })
    
    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        //  arrange
        const iniState = [
            {id:'a',title:'a'},
            {id:'b', title:'b'}, 
            {id:'armagedon',title:'armagedon'}
        ]
        const course = {id:'armagedon',title:'armagedon-2'}
       
        const action = courseActions.updateCourseSuccess(course)

         // act
        const newState = courseReducer(iniState,action)

        //  assert
        expect(newState.length).toEqual(3)
        expect(newState[2].id).toEqual('armagedon')
        expect(newState[2].title).toEqual('armagedon-2')
    })
})

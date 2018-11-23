import React from 'react'
import {ManageCoursePage} from '../../components/course/ManageCoursePage'

describe('Component: Manage Course Page', function () {
  const props = {
    course: { id:'',watchHref:'',authorId:'',category:'',length:'',title:'test'},
    authors:[],
    actions: {saveCourse: ()=>{return Promise.resolve()}}
  }

 const wrapper = mount(<ManageCoursePage {...props}/>);
  it('should error message when trying save empty title',() => {
     const saveButton = wrapper.find('input').last()
     expect(saveButton.prop('type')).toBe('submit')
     saveButton.simulate('click')
     expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
  })
})

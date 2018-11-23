import React from 'react'
import CourseForm from '../../components/course/CourseForm'
import TextInput from '../../components/_common/TextInput'

describe('Component: Course Form', function () {
  const props = {
    course: { id:'',authorId:'',category:'',length:'',title:'test'},
    allAuthors:[],
    onChange:()=>{},
    saving:false,
    onSave:()=>{},
    error: {}
  }

  const wrapper = shallow(<CourseForm {...props}/>);

  it('should render course form', () => {
    expect(wrapper.find('form').length).toBe(1)
  });

  it('should render button save',() => {
    expect(wrapper.find('input').props().value).toBe('Save')
    expect(wrapper.find('input').props().disabled).toBe(false)
  })
  it('should render TextInput',() =>{
    expect(wrapper.find(TextInput).length).toBe(3)
  })
 
})

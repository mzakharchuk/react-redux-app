import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../_actions/courseActions'
import {bindActionCreators} from 'redux'

class CoursePage extends Component {
    constructor(props,context){
        super(props,context)

        this.state = {
            course: {title: ""}
        }
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onSaveHandler = this.onSaveHandler.bind(this)
    }
    onTitleChange(e){
        const course = this.state.course
        course.title = e.target.value
        this.setState({course:course})
    }
    onSaveHandler(){
        // first way to use   this.props.dispatch(courseActions.createCourse(this.state.course))
        // second way to use  this.props.createCourse(this.state.course)

        this.props.actions.createCourse(this.state.course)
    }

    courseRow(course,index){
        return <div key={index}>{course.title}</div>
    }

    render(){
        return( 
        <div>
            <h1>Courses</h1>
            {this.props.courses.map(this.courseRow)}
            <h2>Add course</h2>
            <input
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title}/>

            <input
                type="submit"
                value="Save"
                onClick={this.onSaveHandler}/>
        </div>
        )
    }   
}

function mapStateToProps(state){
    return{
        courses: state.courses
    }
}

// 2 way to use 
// function mapDispatchToProps(dispatch){
//     return{
//         createCourse: (course) => {
//           dispatch(courseActions.createCourse(course))
//         }
//       }
// }

// 3 way to use 
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions,dispatch)
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage)


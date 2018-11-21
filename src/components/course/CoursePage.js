import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../_actions/courseActions'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'


import CourseList from './CourseList'

class CoursePage extends Component {
    constructor(props,context){
        super(props,context)
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
    }
    redirectToAddCoursePage(){
        this.props.history.push('/course')
    }

    render(){
        return( 
        <div className="jumbotron">
            <h1>Courses</h1>
            <input type="submit"
                value="Add new Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}/>
          <CourseList courses={this.props.courses}/>
        </div>
        )
    }   
}

function mapStateToProps(state){
    return{
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions,dispatch)
      }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CoursePage))


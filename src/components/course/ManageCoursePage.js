import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../_actions/courseActions'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import CourseForm from './CourseForm'


class ManageCoursePage extends Component {
    constructor(props,context){
        super(props,context)

        this.state = {
            course: Object.assign({},this.props.course),
            errors: {},
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSaveHandler = this.onSaveHandler.bind(this)
    }

    onChangeHandler(e){
        const field = e.target.name
        let course = this.state.course
        course[field] =event.target.value
        return this.setState({course:course})
    }

    onSaveHandler(e){
        e.preventDefault()
        this.props.actions.saveCourse(this.state.course)
        this.props.history.push('/courses')
    }

    render(){
        return( 
        <div className="jumbotron">
            <h1>Manage course</h1>
            <CourseForm 
                course={this.state.course}
                allAuthors={this.props.authors}
                onChange={this.onChangeHandler}
                onSave={this.onSaveHandler}
                error={this.state.errors}
                />
        </div>
        )
    }   
}

function getCourseById(courses,id){
    const course = courses.filter(x => x.id===id)
    if(course) 
        return course[0]
    else
        return { id:'',watchHref:'',authorId:'',category:'',length:'',title:''}
}

function mapStateToProps(state, ownProps){
    debugger
    const courseId = ownProps.match.params.id

    let transformAuthors = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' '+ author.lastName
        }
    })
    return{
        course: getCourseById(state.courses,courseId),
        authors: transformAuthors
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseActions,dispatch)
      }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage))


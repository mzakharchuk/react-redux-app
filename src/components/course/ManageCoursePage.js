import React, { Component} from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../_actions/courseActions'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import CourseForm from './CourseForm'
import toastr from 'toastr'

export class ManageCoursePage extends Component {
    constructor(props,context){
        super(props,context)

        this.state = {
            course: {...this.props.course},
            errors: {},
            saving: false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSaveHandler = this.onSaveHandler.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(this.state.course.id !== nextProps.course.id){
            this.setState({course:{...nextProps.course}})
        }
    }

    onChangeHandler(e){
        const field = e.target.name
        let course = this.state.course
        course[field] =event.target.value
        return this.setState({course:course})
    }
    courseFormIsValid(){
        let formisValid = true
        let errors = {}
        if(this.state.course.title.length<5){
            errors.title = 'Title must be at least 5 characters.'
            formisValid = false
        }
        this.setState({errors:errors})
        return formisValid
    }

    onSaveHandler(e){
        e.preventDefault()
        if(!this.courseFormIsValid()) return

        this.setState({saving:true})
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error =>{
            toastr.error(error)
            this.setState({saving:false})
        })
    }
    redirect(){
        this.setState({saving:false})
        toastr.success("Course saving")
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
                saving={this.state.saving}
                onSave={this.onSaveHandler}
                error={this.state.errors}
                />
        </div>
        )
    }   
}

function getCourseById(courses,id){
    const course = courses.filter(x => x.id===id)
    if(course.length > 0) 
        return course[0]
    else
        return { id:'',authorId:'',category:'',length:'',title:''}
}

function mapStateToProps(state, ownProps){
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


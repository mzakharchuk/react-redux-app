import React, { Component} from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'

import ProtectedHome from './home/ProtectedHome.jsx'
import AboutPage from './about/aboutPage'
import PageNotFound from './notFound/PageNotFound'
import Login from './secure/Login'
import CoursePage from './course/CoursePage'
import ManageCoursePage from './course/ManageCoursePage'
import RegisterPage from './register/RegisterPage'

import PrivateRoute from './secure/PrivateRoute'

import Header from './_common/Header'
import {history} from '../_helpers'

class App extends Component {
    render(){
        return <div className="container-fluid">
            {this.props.isLoggin?<Header/>:null}
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={ProtectedHome}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/courses" component={CoursePage}/>
                    <Route exact path="/course" component={ManageCoursePage}/>
                    <Route path='/course/:id' component={ManageCoursePage}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={RegisterPage}/>

                    <Route component={PageNotFound}/>
                </Switch>
                </Router>
        </div>
    }
}
function mapStateToProps(state){
    const {loggedIn} = state.authentication
    return {
        isLoggin:loggedIn
    }
}
export default connect(mapStateToProps)(App)

import React, { Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './home/homePage'
import AboutPage from './about/aboutPage'
import PageNotFound from './notFound/PageNotFound'
import ProtectedHome from './secure/protectedHome.jsx'
import Login from './secure/Login'
import CoursePage from './course/CoursePage'
import ManageCoursePage from './course/ManageCoursePage'
import RegisterPage from './register/RegisterPage'

import PrivateRoute from './secure/PrivateRoute'

import Header from './_common/Header'

class App extends Component {

    render(){
        return <div className="container-fluid">
            <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/courses" component={CoursePage}/>
                    <Route exact path="/course" component={ManageCoursePage}/>
                    <Route path='/course/:id' component={ManageCoursePage}/>
                  
                    <PrivateRoute path="/private" component={ProtectedHome}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={RegisterPage}/>

                    <Route component={PageNotFound}/>
                </Switch>
        </div>
    }   
}
export default App
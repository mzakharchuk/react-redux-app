import React, { Component} from 'react'
import { Redirect } from 'react-router-dom';
import authService from '../../services/authService'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {loggedIn:authService.isAuthenticated()}
        this.LoginHandler = this.LoginHandler.bind(this)
    }
    LoginHandler () {
        authService.signIn()
        this.setState({loggedIn: true})
    }

    render () {
        const {target} = this.props.location.state || {target:{pathname:'/private'}}
        if(this.state.loggedIn){
            return <Redirect to={target}/>
        }
        return (
        <div>
             <h1>Sign in</h1>

             <input type="submit" className='btn btn-primary' value="Login" onClick={this.LoginHandler}/>
        </div>)
    }   
}
export default Login
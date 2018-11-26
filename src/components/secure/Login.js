import React, { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Redirect } from 'react-router-dom';
import * as loginAction from '../../_actions/loginAction'
import TextInput from '../_common/TextInput'
import toastr from 'toastr'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {login:'',password:''},
            loggedIn:this.props.user.loggedIn 
        }
        this.LoginHandler = this.LoginHandler.bind(this)
        this.onChangeHandler =this.onChangeHandler.bind(this) 
    }
    onChangeHandler(e){
        const field = e.target.name
        let user = this.state.user
        user[field] =event.target.value
        return this.setState({user:user})
    }

    LoginHandler (e) {
        e.preventDefault()
        this.props.actions.signIn(this.state.user).then(() => 
            this.redirect())
    }
    redirect(){
        this.setState({saving:false})
        toastr.success("You are signin")
        this.props.history.push('/private')
    }

    render () {
        // const {target} = this.props.location.state || {target:{pathname:'/private'}}
        // if(this.props.user.loggedIn){
        //     return <Redirect to={target}/>
        // }
        return (
            <div className="jumbotron">
             <h1>Sign in</h1>
             <form className="col-md-6">
                <TextInput
                    name={'login'}
                    label="Login"
                    onChange={this.onChangeHandler}
                   />
                <TextInput 
                    name={'password'}
                    label="Password"
                    password={true}
                    onChange={this.onChangeHandler}
                    />

                <input type="submit" className='btn btn-primary' value="Login" onClick={this.LoginHandler}/>
             </form>
             
        </div>)
    }   
}

function mapStateToProps(state){
    return {
        user:state.authentication
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(loginAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
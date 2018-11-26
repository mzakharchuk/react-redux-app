import React, { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Redirect } from 'react-router-dom';
import * as loginAction from '../../_actions/loginAction'
import { withRouter } from 'react-router-dom'

class ProtectedHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                name:this.props.user.name,
                lastName:this.props.user.lastName
            }
        }

        this.LogoutHandler = this.LogoutHandler.bind(this)
    }

    LogoutHandler(e){
        this.props.actions.singOut()
        this.props.history.push('/login')
    }
    render(){
        return(
        <div className="jumbotron">
            <h1>welcome to home page</h1>
            <h2>{this.state.user.name+ ' ' + this.state.user.lastName }</h2>
            <input type="submit" className='btn btn-primary' value="Logout" onClick={this.LogoutHandler}/>
        </div>
        )
    }

}
function mapStateToProps(state){
    const {user} = state.authentication
    return {
        user
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(loginAction,dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProtectedHome))
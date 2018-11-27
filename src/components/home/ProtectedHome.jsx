import React, { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginAction from '../../_actions/loginAction'
import * as userActions from '../../_actions/userActions'
import { history } from '../../_helpers'

class ProtectedHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                firstName:this.props.user.firstName,
                lastName:this.props.user.lastName
            }
        }

        this.LogoutHandler = this.LogoutHandler.bind(this)
    }
    componentDidMount() {
        this.props.actions.getAllUsers()
    }

    LogoutHandler(e){
        this.props.actions.singOut()
        history.push('/login')
    }
    render(){
        return(
        <div className="jumbotron">
            <h1>Welcome to private home page</h1>
            <h2>{this.state.user.firstName+ ' ' + this.state.user.lastName }</h2>
            <br/>
            <label>Registered users</label>
            {this.props.users.map(user => {
              return <div key={user.id}><h4>{user.username}</h4></div>
            })}
            <br/>
            <input type="submit" className='btn btn-primary' value="Logout" onClick={this.LogoutHandler}/>
        </div>
        )
    }

}
function mapStateToProps(state){
    const {user} = state.authentication
    const users = state.users.filter(x=>x.id != user.id)
    return {
        user,
        users
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ ...loginAction, ...userActions },dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProtectedHome)
import React, { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginAction from '../../_actions/loginAction'
import * as userActions from '../../_actions/userActions'
import { history } from '../../_helpers'
import toastr from 'toastr'

class ProtectedHome extends Component {
    constructor(props){
        super(props)
        this.logoutHandler = this.logoutHandler.bind(this)
        this.deleteUserHandler = this.deleteUserHandler.bind(this)
    }
    componentDidMount() {
        this.props.actions.getAllUsers()
    }

    deleteUserHandler(id){
        this.setState({delete:true})
        this.props.actions.deleteUser(id)
        .then(()=> toastr.success('User was deleted') )
        .catch(error=> toastr.error(error))
    }

    logoutHandler(e){
        this.props.actions.singOut()
        history.push('/login')
    }
    render(){
        const { user, users } = this.props;
        return(
        <div className="jumbotron">
            <h1>Welcome to private home page</h1>
            <h2>{ user.firstName+ ' ' + user.lastName }</h2>
            <br/>
            <label>Registered users</label> 
            <ul>{
                users.items
                ?users.items.map(user => {
                    return (
                        <li key={user.id}>
                        {user.firstName + ' ' + user.lastName}
                        {
                            user.deleting
                            ? <em> - Deleting...</em>
                            : <span>  - <a style={{cursor:'pointer'}} onClick={() => this.deleteUserHandler(user.id)}>Delete</a></span>
                        }
                        </li>
                    )
                    })
                :<em>Loading...</em>
            }
             
                 </ul>
            <br/>
            <input type="submit" className='btn btn-primary' value="Logout" onClick={this.logoutHandler}/>
        </div>
        )
    }

}
function mapStateToProps(state){
    const {user} = state.authentication
    const {users} = state
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
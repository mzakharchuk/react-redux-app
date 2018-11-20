import React, { Component} from 'react'
import { Redirect } from 'react-router-dom';
import authService from '../../services/authService'

class Logout extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        authService.singOut()
    }

    render () {
        return (
        <div>
            <Redirect to='/login'/>
        </div>)
    }   
}
export default Logout
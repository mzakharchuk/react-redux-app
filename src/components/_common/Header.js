import React from 'react'
import { NavLink } from 'react-router-dom'
class Header  extends React.Component {
    render() {
        return(
            <div>
                <NavLink exact to="/" className="btn" activeClassName="active">Home</NavLink> 
                {' | '}
                <NavLink to="/courses" className="btn" activeClassName="active">Courses</NavLink>
                {' | '} 
                <NavLink to="/login" className="btn" activeClassName="active">login</NavLink>
                {' | '}
                <NavLink exact to="/chat" className="btn" activeClassName="active">message</NavLink> 
                {' | '}
                <NavLink to="/about" className="btn" activeClassName="active">About</NavLink>
            </div>
        )
    }
}
export default Header 
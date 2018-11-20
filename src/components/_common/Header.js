import React from 'react'
import { NavLink } from 'react-router-dom'

class Header  extends React.Component {
    render() {
        return(
            <div>
                <NavLink  to="/" className="btn" activeClassName="active">Home</NavLink> 
                {' | '}
                <NavLink to="/about" className="btn" activeClassName="active">About</NavLink>
                {' | '}
                <NavLink to="/courses" className="btn" activeClassName="active">Courses</NavLink>
                {' | '} 
                <NavLink to="/private" className="btn" activeClassName="active">private</NavLink>
                {' | '}
                <NavLink to="/login" className="btn" activeClassName="active">login</NavLink>
            </div>
        )
    }
}
export default Header 
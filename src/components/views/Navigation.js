import React from "react"
import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import { actionTypes } from '../../constants'

let NavigationComponent = (props) => (
    
    // <!--Navbar-->
    <nav className="navbar navbar-expand-lg navbar-dark indigo">

        {/*<!-- Collapse button -->*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

        {/*<!-- Collapsible content -->*/}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/*<!-- Links -->*/}
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" onClick={props.navigateTo.bind(this, '/')}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/bubblegum" onClick={props.navigateTo.bind(this, '/bubblegum')}>Bubblegum</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/shoelaces" onClick={props.navigateTo.bind(this, '/shoelaces')}>shoelaces</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/login" onClick={props.handleLogout.bind(this, '/login')}>Logout</NavLink>
                </li>                
                {/*<!-- Dropdown -->*/}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" to="#">Action</a>
                        <a className="dropdown-item" to="#">Another action</a>
                        <a className="dropdown-item" to="#">Something else here</a>
                    </div>
                </li>

            </ul>
            {/*<!-- Links -->*/}
        </div>
        {/*<!-- Collapsible content -->*/}

    </nav>
)

const state = (store) => {
  return { }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {    

    dispatch(replace(location));
  },
  handleLogout: (location) => {
    
    // Delete the token
    localStorage.removeItem("jwt-token");
    
    // Redirect
    dispatch(push(location));
  }
});

export default withRouter(connect(state, mapDispatchToProps)(NavigationComponent));
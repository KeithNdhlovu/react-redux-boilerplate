import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'

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
                    <a className="nav-link" to="/" onClick={props.navigateTo.bind(this, '/')}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/login" onClick={props.navigateTo.bind(this, '/login')}>Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/bubblegum" onClick={props.navigateTo.bind(this, '/bubblegum')}>bubblegum</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/shoelaces" onClick={props.navigateTo.bind(this, '/shoelaces')}>shoelaces</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" to="/logout" onClick={props.handleLogout.bind(this, '/logout')}>logout</a>
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
    dispatch({
        type: actionTypes().NAV_CHANGED, 
        payload: ownProps.history.push(location)
    });
  },
  handleLogout: (location) => {
    
    // Delete the token
    localStorage.removeItem("jwt-token");

    // Refresh
    dispatch({
        type: actionTypes().NAV_CHANGED, 
        payload: ownProps.history.replaceState(null, location)
    });
  }
});

export default withRouter(connect(state, mapDispatchToProps)(NavigationComponent));
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux"
import { withRouter, Link } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import DefaultLogo from '../../styles/images/logo.png'

import { actionTypes } from '../../constants'
import { actions } from '../../actions/authActions'

class HeaderComponent extends Component {
    render() {
        
        var { header } = this.props

        return (
            <header className="page-topbar show-on-small hide-on-med-and-up">
                <div className="navbar-fixed">
                    {/* @TODO: style={{ background: "#"+header.color }}*/}
                    <nav className="nav" style={{ background: "#"+header.color }}>
                        <div className="valign-wrapper col-12 no-padding">
                            <ul className="valign-wrapper col-12 no-padding">
                                <li className="link logo-image valign">
                                    <div className="header-logo-container" 
                                         style={{ backgroundImage: `url(${header.logo})` }}>
                                    </div>
                                </li>
                                <li className="link valign-wrapper">
                                    <h4 className="no-margin" href="#" >{ header.name }</h4>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

class SideNavComponent extends Component {
    render() {

        const { links, header, navigateTo, router, logout } = this.props

        return (

            <div id="inner-left-sidebar-nav">
                <ul style={{ background: header.accent }}
                        className="side-menu show-full collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    <ul className="no-padding">
                        {links.map((link, index) => (
                            <li className={ "link valign-wrapper " + ((router.location.pathname == link.url) ? "active" : "")}
                                key={ index }>
                                <Link 
                                to={ link.url }
                                onClick={ navigateTo.bind(this, link) }
                                replace
                                className={"nav-link waves-effect waves-cyan "+ ((router.location.pathname == link.url) ? "active" : "")}>{ link.caption }</Link>
                            </li>
                        ))}                                        
                    </ul>
                    <ul className="no-padding place-bottom">
                        <li className="link valign-wrapper">
                            <span><i className="fa fa-question-circle fa-2x"></i>&nbsp;&nbsp;Help</span>
                        </li>
                        <li className="link valign-wrapper" onClick={ logout.bind(this) }>
                            <span><i className="fa fa-cog fa-2x"></i>&nbsp;&nbsp;Settings</span>
                        </li>
                        <li className="link valign-wrapper">
                            <span><i className="fa fa-sign-out fa-2x"></i>&nbsp;&nbsp;Logout</span>
                        </li>
                    </ul>
                </ul>
                <HeaderComponent header={ header }/>
            </div>
        );
    }
}

SideNavComponent.propTypes = {
    links: React.PropTypes.array.isRequired,
    header: React.PropTypes.object.isRequired
};

const state = (store, router) => {
  return {
      selected: store.org.organisation,
      router: router
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(actions.clearLogins())
  },
  navigateTo: (link) => {    

    // We tell browser to remember
    if (link !== null){
        dispatch(replace(link.url))
    }
    
    // Change the main content to correspond to navigation
    
    // we tell system to listen
    // dispatch({type: actionTypes().ORGANISATION_NAVIGATION_CHANGED, payload: item});
  }
});

export default withRouter(connect(state, mapDispatchToProps)(SideNavComponent));
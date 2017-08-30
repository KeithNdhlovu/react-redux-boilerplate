import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import { actionTypes } from '../../constants'

class HeaderComponent extends Component {
    render() {
        
        var { header } = this.props;
        
        return (
            <header className="page-topbar show-on-small hide-on-med-and-up">
                <div className="navbar-fixed">
                    <nav className="nav">
                        <div className="valign-wrapper col-12 no-padding">
                            <ul className="valign-wrapper col-12 no-padding">
                                <li className="link logo-image valign">
                                    <div className="header-logo-container" style={{backgroundImage: `url(${header.image})`}}></div>
                                </li>
                                <li className="link valign-wrapper">
                                    <h4 className="no-margin" href="#" >{ header.organisation_name }</h4>
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

        const { links, header } = this.props;

        return (

            <div id="inner-left-sidebar-nav">
                <ul className="side-menu show-full collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    {links.map((link, index) => (
                        <li className="link valign-wrapper" 
                            key={link.id}>
                            <a href={link.url} className="nav-link waves-effect waves-cyan">{ link.caption }</a>
                        </li>
                    ))}
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

const state = (store) => {
  return {
      selected: store.organisation,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (item) => {    

    // We tell browser to remember
    // dispatch(replace(item.ur));

    // we tell system to listen
    dispatch({type: actionTypes().ORGANISATION_NAVIGATION_CHANGED, payload: item});
  }
});

export default withRouter(connect(state, mapDispatchToProps)(SideNavComponent));
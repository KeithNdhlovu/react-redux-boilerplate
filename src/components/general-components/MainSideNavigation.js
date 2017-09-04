import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import { actionTypes } from '../../constants'

import DefaultLogo from '../../styles/images/logo.png';

class MainSideNavComponent extends Component {
    render() {

        const { navigateTo, currentOrganisation }  = this.props;
        console.log("Selected", currentOrganisation);

        return (
            // <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul className="side-menu collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    
                    {/* All */}
                    <li className="logo-container valign-wrapper">
                        <div className="white-circle">
                            <NavLink 
                                to="/" 
                                onClick={ navigateTo.bind(this, null) } 
                                className="text-link no-padding no-margin">All</NavLink>
                        </div>
                    </li>

                    {this.props.organisations.map((organisation, index) => (
                        <li className="logo-container valign-wrapper" 
                            key={ index }>
                            <NavLink 
                                to="/" 
                                className="white-circle" 
                                onClick={ navigateTo.bind(this, organisation) }
                                style={{ 
                                    backgroundImage: `url(${DefaultLogo})`,
                                    opacity: (organisation.id === currentOrganisation.id) ? 1 : null
                                }}>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        );
    }
}

MainSideNavComponent.propTypes = {
    organisations: React.PropTypes.array.isRequired,
};

const state = (store) => {
  return {
      currentOrganisation: store.org.organisation,
      organisations: store.org.organisations,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (organisation) => {    

    // We tell browser to remember
    dispatch(replace(organisation.ur));

    console.log(organisation)
    // we tell system to listen
    dispatch({type: actionTypes().ORGANISATION_NAVIGATION_CHANGED, payload: organisation});
  }
});

export default withRouter(connect(state, mapDispatchToProps)(MainSideNavComponent));
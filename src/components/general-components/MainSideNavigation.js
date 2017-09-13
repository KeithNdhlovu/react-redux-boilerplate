import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import { connect }          from "react-redux"
import { 
    withRouter, 
    NavLink 
} from 'react-router-dom'

import { 
    push, 
    replace, 
    LOCATION_CHANGE 
} from 'react-router-redux'

import { 
    actionTypes 
} from '../../constants'

import DefaultLogo from '../../styles/images/logo.png'

class MainSideNavComponent extends Component {
    render() {

        const { filterByOrganisation, currentOrganisation, location }  = this.props;

        return (
            // <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul className="side-menu collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    
                    {/* All */}
                    <li className="logo-container valign-wrapper">
                        <div className="white-circle"
                            style={{
                                opacity: (currentOrganisation.id === null) ? 1 : null
                            }}>
                            <NavLink 
                                to="/" 
                                onClick={ filterByOrganisation.bind(this, null) }
                                className="text-link no-padding no-margin">All</NavLink>
                        </div>
                    </li>

                    {this.props.organisations.map((organisation, index) => (
                        <li className="logo-container valign-wrapper" 
                            key={ index }>
                            <NavLink 
                                to="/" 
                                className="white-circle" 
                                onClick={ filterByOrganisation.bind(this, organisation) }
                                style={{ 
                                    backgroundImage: `url(${organisation.logo})`,
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
      location: store.routing.location,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterByOrganisation: (organisation) => {    

    // Let all the props know that we are navigating to this organisation
    dispatch({type: actionTypes().ORGANISATION_NAVIGATION_CHANGED, payload: organisation})
  }
});

export default withRouter(connect(state, mapDispatchToProps)(MainSideNavComponent))
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import { actionTypes } from '../../constants'

class MainSideNavComponent extends Component {
    render() {
        
        console.log(this.props.selected);

        return (
            // <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul className="side-menu collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    
                    {/* All */}
                    <li className="logo-container valign-wrapper">
                        <div className="white-circle">
                            <NavLink 
                                to="/" 
                                onClick={this.props.navigateTo.bind(this, this.props.selected)} 
                                className="text-link no-padding no-margin">All</NavLink>
                        </div>
                    </li>

                    {this.props.organisations.map((organisation, index) => (
                        <li className="logo-container valign-wrapper" 
                            key={ organisation.id }>
                            <NavLink 
                                to="/" 
                                className="white-circle" 
                                onClick={ this.props.navigateTo.bind(this, organisation) }
                                style={{ 
                                    backgroundImage: `url(${organisation.image})`,
                                    opacity: (organisation.id === this.props.selected.id) ? 1 : null
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
      selected: store.organisation,
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
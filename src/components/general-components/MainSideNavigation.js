import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainSideNavComponent extends Component {
    render() {
        return (
            // <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul id="slide-out" className="collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    {this.props.organisations.map((organisation, index) => (
                        <li className="logo-container valign-wrapper" 
                            key={organisation.id}>
                            <div className="white-circle" style={{backgroundImage: `url(${organisation.image})`}}>
                                {/*<img src={organisation.image} className="logo-image login-image" />*/}
                            </div>
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

export default MainSideNavComponent;
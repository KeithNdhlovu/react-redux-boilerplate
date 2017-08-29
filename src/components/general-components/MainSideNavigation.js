import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainSideNavComponent extends Component {
    render() {
        return (
            // <!-- START LEFT SIDEBAR NAV-->
            <aside id="left-sidebar-nav">
                <ul className="side-menu collapsible collapsible-accordion side-nav fixed leftside-navigation custom">
                    
                    {/* All */}
                    <li className="logo-container valign-wrapper">
                        <div className="white-circle">
                            <a className="text-link no-padding no-margin">All</a>
                        </div>
                    </li>

                    {this.props.organisations.map((organisation, index) => (
                        <li className="logo-container valign-wrapper" 
                            key={organisation.id}>
                            <div className="white-circle" style={{backgroundImage: `url(${organisation.image})`}}>
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    render() {
        
        const { header } = this.props;
        
        return (
            <header className="page-topbar show-on-small hide-on-med-and-up">
                <div className="navbar-fixed">
                    <nav className="nav">
                        <div className="valign-wrapper col-12 no-padding">
                            <ul className="valign-wrapper col-12 no-padding">
                                <li className="link logo-image valign">
                                    <div className="header-logo-container" style={{backgroundImage: `url(${header.logo})`}}></div>
                                </li>
                                <li className="link valign-wrapper">
                                    <h4 className="no-margin" href="#" >{ header.caption }</h4>
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

export default SideNavComponent;
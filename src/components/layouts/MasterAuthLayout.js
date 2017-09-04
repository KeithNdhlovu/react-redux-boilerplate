import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import { actionTypes } from '../../constants'
import { actions } from '../../actions/organisationActions'

import Login from '../views/Login'
import Feed  from '../views/Feed'

import Resource  from '../views/Resource'
import Calendar  from '../views/Calendar'
import Contact   from '../views/Contact'
import Channel   from '../views/Channel'

import ForOhFour from '../views/ForOhFour'
import Navigation from '../views/Navigation'

import MainSideNavigation from '../general-components/MainSideNavigation'
import SideNavigation from '../general-components/SideNavigation'

import DefaultLogo from '../../styles/images/logo.png'

import history from "../../history"

const routes = [
  { 
    path: '/',
    exact: true,
    main: Feed,
  },    
  { 
    path: '/calendar',
    main: Calendar,
  },
  { 
    path: '/resources',
    main: Resource,
  },
  { 
    path: '/contacts',
    main: Contact,
  },
  { 
    path: '/channels',
    main: Channel,
  },    
]

const links = [
  {
    id: 1,
    caption: "News Feed",
    url: "/",
  }, {
    id: 2,
    caption: "Calendar",
    url: "/calendar"
  }, {
    id: 3,
    caption: "Resources",
    url: "/resources"
  }, {
    id: 4,
    caption: "Contact Details",
    url: "/contacts"
  }, {
    id: 5,
    caption: "Channels",
    url: "/channels"
  }
];


class MasterAuthLayout extends Component {
  
  async getOrganisations () {
      const { dispatch } = this.props
      dispatch(actions.start())
      await dispatch(actions.fetchOrganisations())
  }

  componentDidMount() {
      this.getOrganisations()
  }
  
  render () {

    const { organisations, organisation } = this.props

    return (
        <Router history={history}>
          {/*<!-- START MAIN -->*/}
          <div className="react-root" id="main">
            {/*<!-- START WRAPPER -->*/}
            <div className="">
              {/*<!-- include side navigation -->*/}
              <MainSideNavigation organisations={ organisations }/>
              
              {/*<!-- include inner side navigation -->*/}
              <SideNavigation links={ links } header={ organisation }/>
              <section id="content">
                
                {/* Content goes here */}
                <div className="react-wrapper-container">
                  <Switch>
                      {routes.map((route, index) => (
                      // Render more <Route>s with the same paths as
                      // above, but different components this time.

                      <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}/>
                    ))}

                    <Route 
                        path="*"
                        component={ForOhFour}/>

                  </Switch>
                </div>
              </section>
              
            </div>
            {/*<!-- END WRAPPER -->*/}
          </div>
          {/*<!-- END MAIN -->*/}
        </Router>
    )
  }
}

export default withRouter(connect((store) => {

  return {
    organisation:  store.org.organisation,
    organisations: store.org.organisations,
    user:          store.user,
  };
})(MasterAuthLayout));

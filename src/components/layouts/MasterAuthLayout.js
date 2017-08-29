import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import { actionTypes } from '../../constants'

import Home from '../views/Home';
import Login from '../views/Login';
import Shoelaces from '../views/Shoelaces';
import Bubblegum from '../views/Bubblegum';
import ForOhFour from '../views/ForOhFour';
import Navigation from '../views/Navigation';

import MainSideNavigation from '../general-components/MainSideNavigation';
import SideNavigation from '../general-components/SideNavigation';

import DefaultLogo from '../../styles/images/logo.png';

import history from "../../history"

const routes = [
  { 
    path: '/',
    exact: true,
    main: Home,
  },    
  { 
    path: '/bubblegum',
    main: Bubblegum,
  },
  { 
    path: '/shoelaces',
    main: Shoelaces,
  }
]

const organisations = [
  {
  "id": 0,
  "organisation_name": "Principal Talk",
  "image": DefaultLogo,
  "primary_color": "#3d3d3d",
  "is_white": true,
  "url": "/organisations/0"
}, {
  "id": 1,
  "organisation_name": "Bubblemix",
  "image": "http://www.cde.ca.gov/ta/sr/cs/images/goldribbonlogo.png",
  "primary_color": "#c565c8",
  "is_white": true,
  "url": "/organisations/1"
}, {
  "id": 2,
  "organisation_name": "Yakidoo",
  "image": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAaxAAAAJDI4MDFiZDczLWQxNmYtNDY5OS1hMTZhLTc3NDIxZjE2YjE1YQ.png",
  "primary_color": "#e1741d",
  "is_white": true,
  "url": "/organisations/2"
}, {
  "id": 3,
  "organisation_name": "Ailane",
  "image": "https://upload.wikimedia.org/wikipedia/en/8/8a/Seabrook_Christian_School_logo.png",
  "primary_color": "#3e5b82",
  "is_white": true,
  "url": "/organisations/3"
}, {
  "id": 4,
  "organisation_name": "Voonyx",
  "image": "https://schoolofbancal.files.wordpress.com/2011/05/school-logo.jpg",
  "primary_color": "#534bbf",
  "is_white": false,
  "url": "/organisations/4"
}, {
  "id": 5,
  "organisation_name": "Browsedrive",
  "image": "https://s3.amazonaws.com/htw/dt-contest-entries/91266/united-states-education-logo-design.png",
  "primary_color": "#360f08",
  "is_white": true,
  "url": "/organisations/5"
}]

const links = [
  {
    id: 1,
    caption: "News Feed",
    url: "/feed"
  }, {
    id: 2,
    caption: "Calendar",
    url: "/calendar"
  }, {
    id: 3,
    caption: "Resources",
    url: "/resource"
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


const MasterAuthLayout = (props) => (
  <Router history={history}>

      {/*<!-- START MAIN -->*/}
      <div className="react-root" id="main">
        {/*<!-- START WRAPPER -->*/}
        <div className="">
          {/*<!-- include side navigation -->*/}
          <MainSideNavigation organisations={ organisations }/>
          
          {/*<!-- include inner side navigation -->*/}
          <SideNavigation links={ links } header={ props.organisation }/>
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

export default withRouter(connect((store) => {

  return {
    organisation: store.organisation,
    user:  store.user,
  };
})(MasterAuthLayout));

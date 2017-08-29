import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

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
    id: 1,
    organisation_name: "School 1",
    image: "http://www.cde.ca.gov/ta/sr/cs/images/goldribbonlogo.png"
  }, {
    id: 2,
    organisation_name: "School 2",
    image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAaxAAAAJDI4MDFiZDczLWQxNmYtNDY5OS1hMTZhLTc3NDIxZjE2YjE1YQ.png"
  }, {
    id: 3,
    organisation_name: "School 3",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Seabrook_Christian_School_logo.png"
  }, {
    id: 4,
    organisation_name: "School 4",
    image: "https://schoolofbancal.files.wordpress.com/2011/05/school-logo.jpg"
  }, {
    id: 5,
    organisation_name: "School 5",
    image: "https://s3.amazonaws.com/htw/dt-contest-entries/91266/united-states-education-logo-design.png"
  }
];

const links = [
  {
    id: 1,
    caption: "Feed One",
    url: "/feed/one"
  }, {
    id: 2,
    caption: "Feed One",
    url: "/feed/one"
  }, {
    id: 3,
    caption: "Feed One",
    url: "/feed/one"
  }, {
    id: 4,
    caption: "Feed One",
    url: "/feed/one"
  }, {
    id: 5,
    caption: "Feed One",
    url: "/feed/one"
  }
];

const header = {
  caption: "The Ultimate Header",
  logo: DefaultLogo
}

const MasterAuthLayout = () => (
  <Router history={history}>

      {/*<!-- START MAIN -->*/}
      <div className="react-root" id="main">
        {/*<!-- START WRAPPER -->*/}
        <div className="">
          {/*<!-- include side navigation -->*/}
          <MainSideNavigation organisations={ organisations }/>
          
          {/*<!-- include inner side navigation -->*/}
          <SideNavigation links={ links } header={ header }/>
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

export default MasterAuthLayout
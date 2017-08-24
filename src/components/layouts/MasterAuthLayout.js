import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from '../views/Home';
import Login from '../views/Login';
import Shoelaces from '../views/Shoelaces';
import Bubblegum from '../views/Bubblegum';
import ForOhFour from '../views/ForOhFour';
import Navigation from '../views/Navigation';

import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

const history = createBrowserHistory()

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

const MasterAuthLayout = () => (
  <Router history={history}>
    <div className="react-root">
        
        <Navigation history={history} context={this.context} />
        <div className="react-wrapper-container">
            {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.

            <Route 
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}/>
          
          ))}      
      </div>
    </div>
  </Router>
)

export default MasterAuthLayout
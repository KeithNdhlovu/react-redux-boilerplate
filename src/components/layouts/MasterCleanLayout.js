import React from 'react'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Login from '../views/Login';
import ForOhFour from '../views/ForOhFour';

import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

const history = createBrowserHistory()

const MasterCleanLayout = () => (
  <Router history={history}>
    <div className="react-root">
        <div className="react-wrapper-container">

            <Route
                path='*'
                exact={true}
                component={Login} />
      </div>
    </div>
  </Router>
)

export default MasterCleanLayout
import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../views/Login';
import ForOhFour from '../views/ForOhFour';

import history from "../../history"

const MasterCleanLayout = () => (
  <Router history={history}>
    <div className="react-root">
        <div className="react-wrapper-container p-grey-bg">

            <Switch>
              <Route
                  path='/login'
                  exact={true}
                  component={Login} />
                
                {/* when they try and goto any URL besides login, we show them login */}
                <Redirect from="*" to="/login"/>
            </Switch>
      </div>
    </div>
  </Router>
)

export default MasterCleanLayout
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
import ForOhFour from '../views/ForOhFour'

import DefaultLogo from '../../styles/images/logo.png'

import history from "../../history"

const routes = [
  { 
    path: '/',
    exact: true,
    main: Feed,
  },    
  { 
    path: '/resources',
    main: Resource,
  }    
]


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
    store: store
  };
})(MasterAuthLayout));

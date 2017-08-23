import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

// Pages
import Home from '../views/Home';
import Login from '../views/Login';
import Shoelaces from '../views/Shoelaces';
import Bubblegum from '../views/Bubblegum';
import Navigation from '../views/Navigation';

import logo from '../../styles/logo.svg';
import '../../styles/index.css';


import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'

const history = createBrowserHistory()

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    main: Home,
    requiresAuth: true,
  },  
  { path: '/login',
    main: Login,
    requiresAuth: false,
  },
  { path: '/bubblegum',
    main: Bubblegum,
    requiresAuth: false,
  },
  { path: '/shoelaces',
    main: Shoelaces,
    requiresAuth: true,
  }
]

// Check if is logged in
const isLoggedIn = () => {
  return (localStorage.getItem("jwt-token") !== null) ? true : false
}

const MainLayout = () => (
  <Router history={history}>
    <div className="react-root">
        
        { isLoggedIn() ? <Navigation history={history} context={this.context} /> : null }
        <div className="react-wrapper-container">
            {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.

            <Route 
              key={index}
              path={route.path}
              exact={route.exact}
              component={ !isLoggedIn() ? Login : route.main }/>
          
          ))}
      </div>
    </div>
  </Router>
)



const CombinedRoutes = (store, actions) => {
  const GuestRoute = () => (
    <Route path="/">
        <Route
          path="/login"
          component={ Login } />
    </Route>
  )

  const AuthRoute = () => (
    <Route path="/">
      <Route component={ Master.components.Layout }>
        <IndexRoute component={DashboardComponent}/>

        <Route path="post" component={SomeParentComponent} name="Service">
          <IndexRoute
            component={SomeChildComponent_1} />
          <Route
            path="add"
            component={SomeChildComponent_2} />
          <Route
            path=":id/edit"
            component={SomeChildComponent_3} />
          <Route
            path=":id/remove"
            component={SomeChildComponent_4} />
        </Route>
      </Route>
    </Route>
    )

  const MainRoutes = () => (
    isLoggedIn()
      ? AuthRoute(actions)
      : GuestRoute(actions)
  )

  return MainRoutes(actions)
}

export default (store) => {
  return (
    <Route>
      {CombinedRoutes(store, actions)}
      ...
    </Route>
  )
}

// export default MainLayout
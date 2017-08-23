const MasterAuthLayout = (history, routes) => (
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

export default MasterAuthLayout
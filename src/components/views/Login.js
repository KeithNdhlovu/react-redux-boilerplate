import React, { Component } from 'react';
import { withRouter, Redirect, BrowserRouter } from 'react-router-dom'
import { push, replace } from 'react-router-redux'

import { connect }  from "react-redux"

import { getMe }    from "../../actions/userActions"
import { getToken } from "../../actions/loginAction"

import { actionTypes } from '../../constants'

import history from "../../history"

import logo from '../../styles/images/logo.png';

// Bootstrap
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText 
} from 'reactstrap';

class Login extends Component {
  
  state = { password: '', email: '', submittedPassword: '', submittedEmail: '' }
  
  handleChangeEmailChange = (e) => this.setState({ email: e.target.value })

  handleChangePasswordChange = (e) => this.setState({ password: e.target.value })
  

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = this.state
    
    // Get the Token
    // Fire Begin Getting Token action
    this.props.dispatch({type: actionTypes().FETCH_TOKEN_PENDING, payload: null});
    
    let that = this;

    this.props.dispatch(getToken(email, password)).then( () => {
        
        if (that.props.tokenFetched) {
          // We are logged in, lets render the home view
          that.props.dispatch(push("/"));
        }
    });

  }

  render() {
    const { password, email, submittedPassword, submittedEmail } = this.state

    return (
        <section className="login vertical-align">
            <div className="" style={{"width": "28rem", "margin": "0 auto"}}>
                <div className="row">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="col-md-12 p-grey-bg">
                      <br/>
                      <div className="row card-content">
                          {/*<!--Header-->*/}
                          <div className="text-center col-md-12">
                              <img src={logo} height={120} width={120}/>
                              <br/>
                              <br/>
                              <h2 className="header-caption white-text"><strong>Principal</strong> Talk</h2>
                              <br/>
                          </div>

                          {/*<!--Body-->*/}
                          <div className="md-form col-md-12 text-center">
                              <input type="text" id="defaultForm-email" placeholder="Email" name="email" value={email} onChange={this.handleChangeEmailChange} className="custom-input col-md-10" />
                              {/*<label htmlFor="defaultForm-email" className="">Your email</label>*/}
                          </div>

                          <div className="md-form col-md-12 text-center">
                              <input type="password" id="defaultForm-pass" placeholder="Password" name="password" value={password} onChange={this.handleChangePasswordChange} className="custom-input col-md-10" />
                              {/*<label htmlFor="defaultForm-pass" className="">Your password</label>*/}
                          </div>
                          
                          {/* show errors if they exist*/}

                          { this.props.error ? ( <p className="col-md-12 text-center red-text"> Username or Password incorrect</p> ) : null }
                          
                          {/* Show button or loader */}
                          {this.props.fetchingToken ? (
                              <div className="progress primary-color-dark"><div className="indeterminate"></div></div>
                            ): (
                              <div className="col-md-12 text-center">
                                <button className="p-btn col-md-6 btn white waves-effect waves-light">Sign in</button>
                              </div>
                            )
                          }
                      </div>
                      <br/>
                    </Form>
                </div>

            </div>
        </section>
    );
  }
}

export default withRouter(connect((store) => {

  return {
    user:         store.user.user,
    userFetched:  store.user.fetched,
    token:        store.login.token,
    tokenFetched: store.login.fetched,
    fetchingToken:store.login.fetching,
    error:        store.login.error,
    routing:       store.routing
  };
})(Login));
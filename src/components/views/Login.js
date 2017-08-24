import React, { Component } from 'react';
import { withRouter, Redirect, BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'

import { connect }  from "react-redux"

import { getMe }    from "../../actions/userActions"
import { getToken } from "../../actions/loginAction"

import { actionTypes } from '../../constants'

import history from "../../history"

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

  componentDidMount() {
    console.log("onMount", this.props.history)
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = this.state
    
    // get the Token
    
    // Fire Begin Getting Token Event
    this.props.dispatch({type: actionTypes().FETCH_TOKEN_PENDING, payload: null});
    
    let that = this;
    
    this.props.dispatch(getToken(email, password)).then( () => {
        
        if (that.props.tokenFetched) {
          // We are logged in, lets render the home view
          that.props.history.replaceState(null, "/login")
        }
    });
    // this.props.dispatch(getToken(email, password));

  }

  render() {
    const { password, email, submittedPassword, submittedEmail } = this.state

    return (
        <section className="login vertical-align">
            <div className="card" style={{"width": "28rem", "margin": "0 auto"}}>
                <div className="card-body">
                    <Form onSubmit={this.handleSubmit.bind(this)}>

                        {/*<!--Header-->*/}
                        <div className="form-header default-color">
                            <h3>Login</h3>
                        </div>

                        {/*<!--Body-->*/}
                        <div className="md-form">
                            <input type="text" id="defaultForm-email" placeholder="Email" name="email" value={email} onChange={this.handleChangeEmailChange} className="form-control" />
                            {/*<label htmlFor="defaultForm-email" className="">Your email</label>*/}
                        </div>

                        <div className="md-form">
                            <input type="password" id="defaultForm-pass" placeholder="Password" name="password" value={password} onChange={this.handleChangePasswordChange} className="form-control" />
                            {/*<label htmlFor="defaultForm-pass" className="">Your password</label>*/}
                        </div>
                        
                        {/* show errors if they exist*/}

                        { this.props.error ? ( <p className="text-center red-text"> Username or Password incorrect</p> ) : null }
                        
                        {/* Show button or loader */}
                        {this.props.fetchingToken ? (
                            <div className="progress primary-color-dark"><div className="indeterminate"></div></div>
                          ): (
                            <div className="text-center">
                              <button className="btn btn-default waves-effect waves-light">Login</button>
                            </div>
                          )
                        }
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
    error:        store.login.error
  };
})(Login));
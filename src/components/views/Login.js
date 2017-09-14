import React, { Component } from 'react';
import { withRouter, Redirect, BrowserRouter } from 'react-router-dom'
import { push, replace } from 'react-router-redux'

import { connect }  from "react-redux"

import { actions } from '../../actions/authActions'

import { actionTypes } from '../../constants'

import history from "../../history"

import logo from '../../styles/images/logo.png';

import CircleLoader from '../general-components/CircleLoader.js';

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

  async handleSignin (e) {
    const { dispatch } = this.props
    e.preventDefault()

    dispatch(actions.start())

	let payload = {
		username: this.refs.number.value,
		password: this.refs.password.value
	};

    await dispatch(actions.signin(payload))

    dispatch(push("/"));
  }

  render() {
    
    const { auth } = this.props
    
    return (
        <section className="login vertical-align">
            <div className="" style={{"width": "28rem", "margin": "0 auto"}}>
                <div className="row">
                    <Form onSubmit={this.handleSignin.bind(this)} className="col-12 p-grey-bg">
                      <br/>
                      <div className="row card-content">
                            {/*<!--Header-->*/}
                            <div className="text-center col-12">
                                <img src={logo} height={120} width={120}/>
                                <br/>
                                <br/>
                                <h2 className="header-caption white-text">Be Reactive</h2>
                                <br/>
                            </div>

                            {/* show errors if they exist*/}

                            { auth.error ? ( 
                                <div className="col-12">
                                    <div className="alert alert-danger text-center" role="alert">
                                        <strong>Invalid username or password. </strong>
                                    </div>
                                    <br/>
                                </div>
                             ) : null }
                          
                            {/*<!--Body-->*/}
                            <div className="md-form col-12 text-center">
                                <input type="text" placeholder="Number" ref="number" name="number" className="custom-input col-12" />
                                {/*<label htmlFor="defaultForm-email" className="">Your email</label>*/}
                            </div>

                            <div className="md-form col-12 text-center">
                                <input type="password" placeholder="Password" ref="password" name="password" className="custom-input col-12" />
                                {/*<label htmlFor="defaultForm-pass" className="">Your password</label>*/}
                                <div className="row">
                                    <a href="#/help" className="col-6 text-white text-left underline-hover">Help</a>
                                    <a href="#/forgot" className="col-6 text-white text-right underline-hover">Forgot Password</a>
                                </div>                              
                            </div>

                            <div className="col-12 text-center">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        {/* Show button or loader */}
                                        { auth.authenticating ? (
                                            <button className="p-btn col-6 btn white waves-effect waves-light"><CircleLoader /></button>
                                            ) : (
                                                <button className="p-btn col-6 btn white waves-effect waves-light">Sign In</button>
                                            )
                                        }
                                        <br /><br />
                                    </div>
                                    <div className="col-12 text-center">
                                        <a href="#/signup" className="text-white underline-hover"><strong>Sign Up</strong></a>
                                    </div>                              
                                </div>
                            </div>

                      </div>
                      <br/>
                    </Form>
                </div>

            </div>
        </section>
    );
  }
}

export default withRouter(connect((state) => {
  return {
    auth: state.auth
  };
})(Login));
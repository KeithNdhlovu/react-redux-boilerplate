import React, { Component } from 'react';
import { withRouter, Redirect, BrowserRouter } from 'react-router-dom'
import { push, replace } from 'react-router-redux'

import { connect }  from "react-redux"

import { getMe }    from "../../actions/userActions"
import { getToken } from "../../actions/loginAction"
import { actions, signin, signout } from '../../react-redux-oauth2'


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
  
  state = { password: '', username: '', submittedPassword: '', submittedUsername: '' }
  
  handleChangeUsernameChange = (e) => this.setState({ username: e.target.value })

  handleChangePasswordChange = (e) => this.setState({ password: e.target.value })
  

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { password, username } = this.state
    
//     // Get the Token
//     // Fire Begin Getting Token action
//     this.props.dispatch({type: actionTypes().FETCH_TOKEN_PENDING, payload: null});
    
//     let that = this;

//     this.props.dispatch(getToken(username, password)).then( () => {
        
//         if (that.props.tokenFetched) {
//           // We are logged in, lets render the home view
//           that.props.dispatch(push("/"));
//         }
//     });

//   }

componentWillMount () {
    
    const { dispatch } = this.props

    dispatch(actions.config({
      token: 'login', //The Route to get the tokken from
      profile_url: 'me', //The URL to get the user profile
      client_id: 'Desktop',
      client_secret: 'The-secret',
      url: process.env.REACT_APP_PROD_API_BASE_URL
    }))
  }

  async handleSignin (e) {
    const { dispatch } = this.props
    e.preventDefault()

	let payload = {
		username: this.refs.number.value,
		password: this.refs.password.value,
		device_id: "WEB APP",
		app_version: 1,
		device_type: "Desktop"
	};

    await dispatch(actions.signin(payload, console.log))
  }

  render() {
    
    const { oauth } = this.props
    
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
                                <h2 className="header-caption white-text"><strong>Principal</strong> Talk</h2>
                                <br/>
                            </div>

                            {/* show errors if they exist*/}

                            { oauth.error ? ( 
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
                                        { oauth.authenticating ? (
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
    user:         state.user.user,
    userFetched:  state.user.fetched,
    token:        state.login.token,
    tokenFetched: state.login.fetched,
    fetchingToken:state.login.fetching,
    error:        state.login.error,
    routing:       state.routing,
    oauth:         state.oauth
  };
})(Login));
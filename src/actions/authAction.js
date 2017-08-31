import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { createAction, handleActions } from 'redux-actions'
import querystring from 'query-string'
import { omit, get, wrap } from 'lodash'

export const actions = {

  /**
   * Initialize options
   */
  config: createAction('REACT_REDUX_OAUTH2/CONFIG'),
  error: createAction('REACT_REDUX_OAUTH2/ERROR'),
  start: createAction('REACT_REDUX_OAUTH2/START'),
  reset: createAction('REACT_REDUX_OAUTH2/RESET'),
  cancel: createAction('REACT_REDUX_OAUTH2/CANCEL'),
  save: createAction('REACT_REDUX_OAUTH2/SAVE'),
  
  /**
   * Using the configurations, set on initialisation, we perform login action when requested upon
   */
  signin (creds, cb = f => f) {
    return (dispatch, getState) => {
      const { config } = getState().oauth
      
      dispatch(actions.start())
      
      axios.post(`${config.url}${config.token}`, Object.assign({
        client_id: config.client_id,
        client_secret: config.client_secret,
        grant_type: 'password'
      }, creds)).then(res => {
        return dispatch(actions.sync(res.data, cb))
      }).catch(e => {
        dispatch(actions.error(e))
      })
    }
  },

  /**
   * Sign out by deleting the tokens
   */
  signout (cb = f => f) {
    return (dispatch, getState) => {
      const { user, config } = getState().oauth
      axios.delete(`${config.url}${config.token}`, {
        headers: { 'Authorization': `Bearer ${user.token.access_token}` }
      }).then(res => {
        dispatch(actions.reset())
        cb(null, res)
      }).catch(e => {
        dispatch(actions.error(e))
        cb(e)
      })
    }
  },
  
  /**
   * After we get the acces token from sign in, we quickly get the user profile
   */
  sync (token, cb = f => f) {
    return (dispatch, getState) => {
      const { config } = getState().oauth
      return axios.get(`${config.url}${config.token}`, {
        headers: { 'Authorization': `Bearer ${token.access_token}` }
      }).then(res => {
        const user = { token, profile: res.data }
        dispatch(actions.save(user))
        cb(null, user)
      }).catch(cb)
    }
  }
}

export const reducer = handleActions({
  'REACT_REDUX_OAUTH2/CONFIG' (state, action) {
    return {...state, config: action.payload}
  },
  'REACT_REDUX_OAUTH2/START' (state, action) {
    return {...state, authenticating: true}
  },
  'REACT_REDUX_OAUTH2/CANCEL' (state, action) {
    return {...state, authenticating: false}
  },
  'REACT_REDUX_OAUTH2/ERROR' (state, action) {
    return {...state, authenticating: false, error: action.payload}
  },
  'REACT_REDUX_OAUTH2/RESET' (state, action) {
    return {...state, authenticating: false, error: null, user: {token: null, profile: null}}
  },
  'REACT_REDUX_OAUTH2/SAVE' (state, action) {
    return {
      ...state,
      authenticating: false,
      user: action.payload
    }
  }
}, {
  authenticating: false,
  user: {
    token: null,
    profile: null
  },
  config: {
    url: 'http://localhost',
    token: '/oauth/token',
    client_id: null,
    client_secret: null,
    providers: {
      github: '/auth/github'
    }
  },
  error: null
})
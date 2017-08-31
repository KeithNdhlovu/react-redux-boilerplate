/**
 * This is where we are going to include all of our reducers and combine them so that everything is nice and neat
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { reducer } from '../react-redux-oauth2'

import auth from './authReducer'
import organisation from './organisationReducer'

export default combineReducers({
    auth,
    organisation,
    routing: routerReducer,
});
/**
 * This is where we are going to include all of our reducers and combine them so that everything is nice and neat
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import user from './userReducer';
import login from './loginReducer';
import organisation from './organisationReducer';

export default combineReducers({
    user,
    login,
    organisation,
    routing: routerReducer
});
/**
 * This is where we are going to include all of our reducers and combine them so that everything is nice and neat
 */

import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import auth                 from './authReducer'
import resource             from './resourceReducer'

export default combineReducers({
    auth,
    resource,
    routing: routerReducer,
});
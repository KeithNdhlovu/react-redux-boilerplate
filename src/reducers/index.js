/**
 * This is where we are going to include all of our reducers and combine them so that everything is nice and neat
 */

import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import auth  from './authReducer'
import feed  from './feedReducer'
import event from './eventReducer'
import resource from './resourceReducer'
import org   from './organisationReducer'

export default combineReducers({
    auth,
    feed,
    org,
    event,
    resource,
    routing: routerReducer,
});
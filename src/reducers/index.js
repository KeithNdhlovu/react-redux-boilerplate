/**
 * This is where we are going to include all of our reducers and combine them so that everything is nice and neat
 */

import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'

import auth  from './authReducer'
import feed  from './feedReducer'
import event from './eventReducer'
import contact from './contactReducer'
import org from './organisationReducer'
import resource from './resourceReducer'

export default combineReducers({
    auth,
    feed,
    org,
    event,
    resource,
    contact,
    routing: routerReducer,
});
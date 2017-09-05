import React, { Component } from 'react'

import { connect } from 'react-redux'
import { pick, keys, omit, remove, has, filter, forEach } from 'lodash' 
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import EventList from '../general-components/EventList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/eventActions'

import CircleLoader from '../general-components/CircleLoader.js'

class Calendar extends Component {
    
    async getUserEvents () {
        const { dispatch, organisation } = this.props

        dispatch(actions.start())

        // When no organisaton id is parsed, we fetch all
        if (organisation && organisation.id == null) {
            await dispatch(actions.fetchUserEventItems())
            return;
        }
        
        // Otherwise we use the selected organisation to ge thte data
        await dispatch(actions.fetchUserEventItems(organisation.id))
    }

    componentDidMount() {
        this.getUserEvents()
    }
    

    render() {
        const { organisation, event } = this.props;

        // Load while we wait for feeds
        if (event.fetching && organisation) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <EventList items={ event.events } organisation={ organisation }/>
            </div>
        );
    }
}

export default withRouter(connect((state) => {
  return {
      organisation: state.org.organisation,
      event:     state.event
  };
})(Calendar));
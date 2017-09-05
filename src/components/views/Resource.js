import React, { Component } from 'react'

import { connect } from 'react-redux'
import { pick, keys, omit, remove, has, filter, forEach } from 'lodash' 
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import ResourceList from '../general-components/ResourceList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/resourceActions'

import CircleLoader from '../general-components/CircleLoader.js'

class Resource extends Component {
    
    async getResources () {
        const { dispatch, organisation } = this.props

        dispatch(actions.start())

        // When no organisaton id is parsed, we fetch all
        if (organisation && organisation.id == null) {
            await dispatch(actions.fetchResources())
            return;
        }
        
        // Otherwise we use the selected organisation to ge thte data
        await dispatch(actions.fetchResources(organisation.id))
    }

    componentDidMount() {
        this.getResources()
    }
    

    render() {
        const { organisation, resource } = this.props;

        // Load while we wait for feeds
        if (resource.fetching && organisation) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <ResourceList items={ resource.resources } organisation={ organisation }/>
            </div>
        );
    }
}

export default withRouter(connect((state) => {
  return {
      organisation: state.org.organisation,
      resource:     state.resource
  };
})(Resource));
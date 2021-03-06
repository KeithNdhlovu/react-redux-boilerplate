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

        await dispatch(actions.fetchResources())
    }

    componentDidMount() {
        this.getResources()
    }
    

    render() {
        const { resource } = this.props

        // Load while we wait for feeds
        if (resource.fetching) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <ResourceList items={ resource.resources }/>
            </div>
        );
    }
}

export default withRouter(connect((store) => {
  return {
      resource:     store.resource
  };
})(Resource));
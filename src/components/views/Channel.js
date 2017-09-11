import React, { Component } from 'react'
import {Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import ChannelList from '../general-components/ChannelList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/channelActions'


import CircleLoader from '../general-components/CircleLoader'
import CustomSelect from '../general-components/CustomSelect'

class Channel extends Component {

    async getChannels () {
        const { dispatch, org } = this.props
        const { organisation }  = org
        
        dispatch(actions.start())

        // When no organisaton id is parsed, we fetch all
        if (organisation && organisation.id == null) {
            await dispatch(actions.fetchChannels())
            return
        }
        
        // Otherwise we use the selected organisation to ge thte data
        await dispatch(actions.fetchChannels(organisation.id))
    }

    componentWillMount() {
        this.getChannels()
    }
    

    render() {
        const { org, channel } = this.props;

        // Load while we wait for feeds
        if (channel.fetching && org.organisations) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <ChannelList items={ channel.channels } org={ org }/>
            </div>
        )
    }
}

export default withRouter(connect((state) => {
  return {
      org:      state.org,
      channel:  state.channel
  };
})(Channel));



rcc
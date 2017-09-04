import React, { Component } from 'react'

import { connect } from 'react-redux'
import { pick, keys, omit, remove, has, filter, forEach } from 'lodash' 
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import FeedList from '../general-components/FeedList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/feedActions'

import CircleLoader from '../general-components/CircleLoader.js'

class Home extends Component {
    
    async getFeeds () {
        const { dispatch } = this.props
        dispatch(actions.start())
        await dispatch(actions.fetchFeedItems())
    }

    componentDidMount() {
        this.getFeeds()
    }
    

    render() {
        const { organisation, feed } = this.props;

        // Load while we wait for feeds
        if (feed.fetching && organisation) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <FeedList items={ feed.feedList } organisation={ organisation }/>
            </div>
        );
    }
}

export default withRouter(connect((state) => {
  return {
      organisation: state.org.organisation,
      feed:     state.feed
  };
})(Home));
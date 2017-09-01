import React, { Component } from 'react'

import { connect } from 'react-redux'
import { pick, keys, omit, remove, has, filter, forEach } from 'lodash' 
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import FeedList from '../general-components/FeedList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/feedActions'

import CircleLoader from '../general-components/CircleLoader.js'


let list = {"results":[{"id":13425,"school_id":22,"title":"Dieretuin","body":"Ons gaan dieretuin toe vrydag 1 Sept","created_at":"2017-08-31T09:49:12Z","updated_at":"2017-08-31T09:49:12Z","disabled_at":null,"rsvp_date":null,"icon_id":3,"is_read":false,"questions":[{"id":323,"question_text":"Gaan jy saam ?","response_type_id":3,"required":0,"multiple_choice":1,"options":[{"key":416,"description":"Ja"},{"key":417,"description":"Nee"},{"key":418,"description":"Sal nog besluit"}]}]},{"id":13041,"school_id":2538,"title":"Training for CPT","body":"Training will be given on App @ 12:00 in CPT Office - this is just for Fiona's use to show colleagues.","created_at":"2017-08-29T09:48:23Z","updated_at":"2017-08-29T09:48:23Z","disabled_at":null,"rsvp_date":null,"icon_id":3,"is_read":false,"questions":[{"id":315,"question_text":"Would you like to attend?","response_type_id":3,"required":1,"multiple_choice":1,"options":[{"key":387,"description":"Yes"},{"key":388,"description":"No"},{"key":389,"description":"You must be crazy"}]}]},{"id":12694,"school_id":22,"title":"DIERETUIN 2017","body":"See the monkeys\n","created_at":"2017-08-23T13:02:25Z","updated_at":"2017-08-23T13:02:25Z","disabled_at":null,"rsvp_date":null,"icon_id":3,"is_read":false,"questions":[{"id":314,"question_text":"Gaan jy saam?","response_type_id":3,"required":0,"multiple_choice":1,"options":[{"key":384,"description":"Yes"},{"key":385,"description":"No"},{"key":386,"description":"Maybe"}]}]},{"id":11946,"school_id":22,"title":"See uitstappie","body":"Ons gaan see toe 17 Aug","created_at":"2017-08-16T13:22:11Z","updated_at":"2017-08-16T13:22:11Z","disabled_at":null,"rsvp_date":null,"icon_id":3,"is_read":false,"questions":[{"id":312,"question_text":"Gaan jy saam?","response_type_id":3,"required":0,"multiple_choice":0,"options":[{"key":382,"description":"Ja"},{"key":383,"description":"Nee"}]}]},{"id":10949,"school_id":22,"title":"Opname 2017","body":"Vir Bemarking wil ons graag weet","created_at":"2017-08-08T09:46:59Z","updated_at":"2017-08-08T09:46:59Z","disabled_at":null,"rsvp_date":null,"icon_id":3,"is_read":false,"questions":[{"id":311,"question_text":"Is u tervrede by ons skool?","response_type_id":2,"required":1}]}],"more":"http:\/\/mapi.principalsoftware.co.za\/v1\/me\/notices\/10949\/1502185619"}

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
        if (feed.fetching) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <FeedList items={ feed.feedList }/>
            </div>
        );
    }
}

export default withRouter(connect((state) => {
  return {
      selected: state.organisation,
      feed:     state.feed
  };
})(Home));
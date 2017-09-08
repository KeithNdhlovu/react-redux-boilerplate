import React, { Component } from 'react'
import {Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import ContactList from '../general-components/ContactList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/contactActions'


import CircleLoader from '../general-components/CircleLoader'
import CustomSelect from '../general-components/CustomSelect'

class Contact extends Component {
    
    async getContacts () {
        const { dispatch, organisation } = this.props

        dispatch(actions.start())

        // When no organisaton id is parsed, we fetch all
        if (organisation && organisation.id == null) {
            await dispatch(actions.fetchContacts())
            return
        }
        
        // Otherwise we use the selected organisation to ge thte data
        await dispatch(actions.fetchContacts(organisation.id))
    }

    componentDidMount() {
        this.getContacts()
    }
    

    render() {
        const { organisation, contact } = this.props;

        // Load while we wait for feeds
        if (contact.fetching && organisation) {
            return <CircleLoader />
        }
        
        return (
            <div>
                 {/*Show feeds when ready */}
                <ContactList items={ contact.contactList } organisation={ organisation }/>
            </div>
        )
    }
}

export default withRouter(connect((state) => {
  return {
      organisation: state.org.organisation,
      contact:      state.contact
  };
})(Contact));
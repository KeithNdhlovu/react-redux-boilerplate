import React, { Component } from 'react'
import {Form, FormGroup } from 'reactstrap'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import EventList from '../general-components/EventList'
import { actionTypes } from '../../constants'
import { actions } from '../../actions/eventActions'


import CircleLoader from '../general-components/CircleLoader'
import CustomSelect from '../general-components/CustomSelect'

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

        const months = [
            {
                "label": "January",
                "value": 0
            }, 
            {
                "label": "February",
                "value": 1
            }, 
            {
                "label": "March",
                "value": 2
            }, 
            {
                "label": "April",
                "value": 3
            }, 
            {
                "label": "May",
                "value": 4
            },

            {
                "label": "June",
                "value": 5
            }, 
            {
                "label": "July",
                "value": 6
            }, 
            {
                "label": "August",
                "value": 7
            }, 
            {
                "label": "September",
                "value": 8
            }, 
            {
                "label": "October",
                "value": 9
            },

            {
                "label": "November",
                "value": 10
            }, 
            {
                "label": "December",
                "value": 11
            }
        ];

        let years = (startYear, endYear) => {
            let years = [];
            for ( var xx = startYear; xx < endYear; xx++ ) {
                years.push({
                    label: xx,
                    value: xx
                });
            } 
            return years;
        }

        let pastYears = years(2010, new Date().getFullYear());
        let futureYears = years(new Date().getFullYear(), 2021);

        let allyears = pastYears.concat(futureYears);

        // Load while we wait for feeds
        if (event.fetching && organisation) {
            return <CircleLoader />
        }
        
        return (
            <div>
                {/* Filters */}
                <Form className="row">
                    <FormGroup className="col-6">
                        <CustomSelect
                            ref="monthSelect"
                            options={months} 
                            clearable={false} 
                            name="selected-month" 
                            disabled={false} 
                            searchable={false}/>
                    </FormGroup>
                    <FormGroup className="col-6">
                        <CustomSelect
                            ref="yearSelect"
                            options={allyears} 
                            clearable={false} 
                            name="selected-year"
                            disabled={false} 
                            searchable={false}/>

                    </FormGroup>
                </Form>
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
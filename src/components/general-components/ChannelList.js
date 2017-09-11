import React, { Component }     from 'react'
import { groupBy, get }         from 'lodash'
import Moment                   from 'moment'
import BaseItem                 from './BaseItem'
import BaseList                 from './BaseList'
import PropTypes                from 'prop-types'
import AddToCalendar            from './AddToCalendar'
import { Row, Input }                from 'react-materialize'
import DefaultLogo              from '../../styles/images/logo.png'

class Item extends Component {

    render() {

        return (
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span class="badge badge-primary badge-pill">14</span>
            </li>
        );
    }
}

class ChannelList extends Component {
    
    constructor(props) {
        super(props)
    }
    
    groupChannelsByOrganisation = (organisations, channels) => {
        
        // lets group our channels/grpups by thir organisation id
        let groupedChannels = groupBy(channels, "school_id")

        organisations.map((organisation, index) => {
            
            return Object.assign(organisation, {
                channels: get(groupedChannels, organisation.id)
            })
        })

        console.log(organisations)
    }

    render() {

        const { items, org } = this.props

        // items.map((item, index) => Object.assign(item, { expand: false }) )
        let channels = this.groupChannelsByOrganisation(org.organisations, items)

        return (

            <ul className="list-group">
                <li className="list-group-item channel-items-container header">
                    <div className="row">
                        <p className="col-10 no-margin align-self-center">Channels</p>
                        <div className="col-2 text-right checkbox-container">
                            <input type="checkbox" className="filled-in" id="filled-in-box-1"/>
                            <label htmlFor="filled-in-box-1"></label>
                        </div>
                    </div>
                </li>
                {channels.map((channel, index) => (
                    <li key={ index } className="list-group-item channel-items-container item">
                        <div className="row">
                            <i className="col-2 fa fa-chevron-down align-self-center" aria-hidden="true"></i>
                            <p className="col-8 no-margin align-self-center">{ channel.name }</p>
                            <div className="col-2 text-right checkbox-container">
                                <input type="checkbox" className="filled-in" id="filled-in-box"/>
                                <label htmlFor="filled-in-box"></label>
                            </div>
                        </div>
                    </li>
                ))}                
            </ul>
        );
    }
}

ChannelList.propTypes = {
    items: React.PropTypes.array.isRequired,
    org: React.PropTypes.object.isRequired
};

export default ChannelList;
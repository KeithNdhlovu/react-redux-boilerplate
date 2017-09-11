import React, { Component }     from 'react'
import { groupBy, get }         from 'lodash'
import Moment                   from 'moment'
import BaseItem                 from './BaseItem'
import BaseList                 from './BaseList'
import PropTypes                from 'prop-types'
import AddToCalendar            from './AddToCalendar'
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
        this.groupChannelsByOrganisation(org.organisations, items)

        return (

            // {items.map((item, index) => (
                
            //     <Item key={ index } 
            //         index={ index } 
            //         item={ item } 
            //         organisation={ organisation } 
            //         type={ item.image ? 1 : 0 } />
            // ))}

            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
        );
    }
}

ChannelList.propTypes = {
    items: React.PropTypes.array.isRequired,
    org: React.PropTypes.object.isRequired
};

export default ChannelList;
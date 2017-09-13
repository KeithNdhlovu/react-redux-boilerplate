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
    constructor(props) {
        super(props);
        let initialState = {
            expand: false
        }
        this.state = initialState
        this.initialState = initialState
    }
    
    togleOpen = () => {
        this.setState({
            expand: !this.state.expand
        })
    }
    
    togleChange = () => {
        console.log("Val", this.refs.channelCheckbox);
    }

    render() {
        const { index, organisation, selectedOrg } = this.props

        return (
            <div className="w-100" key={ index }>   
                <li className="list-group-item channel-items-container organisation-header" style={{ background: "#"+selectedOrg.color }}>
                    <div className="row">
                        <i className={"col-2 fa align-self-center " + (this.state.expand ? "fa-chevron-up" : "fa-chevron-down") } 
                            aria-hidden="true" 
                            onClick={ this.togleOpen.bind(this) }></i>
                            
                        <p className="col-8 no-margin align-self-center">{ organisation.name }</p>
                        <div className="col-2 text-right checkbox-container">
                            <input 
                                type="checkbox" 
                                className="filled-in" 
                                id={"filled-in-box-org-" + index}/>
                            <label htmlFor={"filled-in-box-org-" + index}></label>
                        </div>
                    </div>
                </li>
                <div className={"w-100 nested-child " + ( this.state.expand ? "show" : "hide" ) }>
                    {organisation.channels.map((channel, cIndex) => (
                        <li  key={ cIndex } className="w-100 list-group-item channel-items-container child-item">
                            <div className="row">
                                <p className="col-10 no-margin align-self-center">{ channel.group_name }</p>
                                <div className="col-2 text-right checkbox-container">
                                    <input 
                                        type="checkbox" 
                                        className="filled-in" 
                                        id={"filled-in-box-channel-" + cIndex} 
                                        checked={ channel.is_subscribed }
                                        onChange={ this.togleChange.bind(this) }
                                        disabled={ channel.can_subscribe }
                                        value={ channel.id }/>
                                    <label htmlFor={"filled-in-box-channel-" + cIndex}></label>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
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
    }

    render() {

        const { items, org } = this.props

        this.groupChannelsByOrganisation(org.organisations, items)

        return (

            <ul className="list-group">
                <li className="list-group-item channel-items-container header" style={{ background: org.organisation.accent }}>
                    <div className="row">
                        <p className="col-10 no-margin align-self-center">Channels</p>
                        <div className="col-2 text-right checkbox-container">
                            <input type="checkbox" className="filled-in" id="filled-in-box-1"/>
                            <label htmlFor="filled-in-box-1"></label>
                        </div>
                    </div>
                </li>
                {org.organisations.map((organisation, index) => (
                    <Item key={ index } index={ index } organisation={ organisation } selectedOrg={ org.organisation }/>
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
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddToCalendar from './AddToCalendar'
import Moment from 'moment'
import BaseItem from './BaseItem'

// Global locale to English
Moment.locale('en')

class Item extends Component {
     
    constructor(props) {
        super(props);
        
        const initialState = {
            expand: false,
        }

        this.initialState = initialState
        this.state = initialState
    }

    toggleOpen = (parentFn) => {
        this.setState({
            expand: !this.state.expand,
        })

        parentFn()
    }

    formatDate = (date) => {

        let formated = Moment(date).format('DD')
        return {
            day: Moment(date).format('DD'),
            month: Moment(date).format('MMM.'),
            time: Moment(date).format('H:m'),
        };
    }    

    render() {

        const { index, item, organisation, type, onClick, parent } = this.props

        let event = {
            title: item.title,
            description: null,
            location: item.full_address,
            start_datetime: new Date(item.date),
            end: new Date(item.date)
        };

        const expanded = (this.state.expand && (parent.selectedItem === item.id));

        return (

            <BaseItem active={item.is_read ? "active" : ""} key={ index }>
                <div className="col-12"
                    onClick={ this.toggleOpen.bind(this, onClick) }>
                    <div className="row">
                        <div className="col-10">
                            {/* The header */}
                            <h5 className="mb-1 header" style={{ color: organisation.accent }}>{ item.title }</h5>
                        </div>
                        <div className="col-2">
                            <div className="float-right flex-display">
                                <a href={ "https://www.google.com/maps/search/?api=1&query=" + encodeURI(item.full_address) } target="_blank" className="fa-stack fa-lg">
                                    <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                    <i className="fa fa-map-marker fa-stack-1x white-text"></i>
                                </a>
                                <AddToCalendar event={event} color={ organisation.accent }/>
                            </div>
                        </div>      
                    </div>

                    {/* The date */}
                    <div className="row mb-1">
                        <div className="col-12 valign-wrapper">
                            <div className="flex-display">
                                <strong className="date big">{ this.formatDate(item.date).day }</strong>
                                <p className="small-dates-container">
                                    <small>{ this.formatDate(item.date).month }</small>
                                    <small>{ this.formatDate(item.date).time }</small> 
                                </p>
                            </div>
                            <strong className="separator">-</strong>
                            <div className="flex-display">
                                <strong className="date big">{ this.formatDate(item.date).day }</strong>
                                <p className="small-dates-container">
                                    <small>{ this.formatDate(item.date).month }</small>
                                    <small>{ this.formatDate(item.date).time }</small> 
                                </p>
                            </div>                            
                        </div>
                    </div>

                    {/* The Description */}
                    <p className="mb-1">{ item.description }, { item.full_address }</p>
                    <br/>

                    <div className={"attachments " + (expanded ? "show" : "hide")}>
                        <h1> I am that hidden nigguh </h1>
                    </div>

                    {/* Attachments */}
                    <div className={"attachments " + (expanded ? "show" : "hide")}>
                        {item.attachments.map((attachment, attIndex) => (
                            <span className="badge badge-pill attachment-items"
                                key={ attIndex }>
                                <i className="fa fa-paperclip" style={{ color: organisation.accent }}></i>
                                { attachment.title }
                            </span>
                        ))}
                    </div>

                    {/* The tags in their numbers */}
                    <div className="tags text-right">
                        {item.tags.map((tag, tagIndex) => (
                            <span className="badge badge-pill"
                                key={ tagIndex } 
                                style={{ backgroundColor: tag.color }}>
                                { tag.name }
                            </span>
                        ))}
                    </div>
                </div>
            </BaseItem>
        );
    }
}

class EventList extends Component {
    
    constructor(props) {
        super(props);
        
        const initialState = {
            expand: false,
            selectedItem: null
        }

        this.initialState = initialState
        this.state = initialState
    }

    toggleOpen = (item) => {
        
        this.setState(this.initialState);

        this.setState({
            expand: !item.expand,
            selectedItem: item.id
        });
    }

    render() {

        const { items, organisation } = this.props

        // A flag specific to an item
        {items.map((item, index) => (
            Object.assign(item, {expand: false})
        ))}

        return (
            <div>
                {(items.length == 0) ? (
                    <div className="list-group pp-custom">
                        <a  href="#"
                            className="list-group-item list-group-item-action flex-column align-items-start">
                            
                            <div className="row justify-content-between">
                                <div className="col-12">
                                    {/* The header */}
                                    <h5 className="mb-1 header text-center">Nothing for now</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                ) : (
                    
                    <div className="list-group pp-custom">
                        {/* Search filters */}
                        {items.map((item, index) => (
                            
                            <Item key={ index } 
                                index={ index } 
                                item={ item } 
                                organisation={ organisation } 
                                type={ item.image ? 1 : 0 } 
                                onClick={ this.toggleOpen.bind(this, item) }
                                parent={ this.state }/>
                        ))}
                    </div>
                )}
            </div>             
        );
    }
}

EventList.propTypes = {
    items: React.PropTypes.array.isRequired,
    organisation: React.PropTypes.object.isRequired
};

export default EventList;
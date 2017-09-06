import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddToCalendar from './AddToCalendar'
import Moment from 'moment'

// Global locale to English
Moment.locale('en')

class Item extends Component {
    
    formatDate = (date) => {

        let formated = Moment(date).format('DD')
        return {
            day: Moment(date).format('DD'),
            month: Moment(date).format('MMM.'),
            time: Moment(date).format('H:m'),
        };
    }

    render() {

        const { index, item, organisation, type } = this.props

        let event = {
            title: item.title,
            description: null,
            location: item.full_address,
            start_datetime: new Date(item.date),
            end: new Date(item.date)
        };        

        return (
            <a  href="#" 
                key={ index } 
                className={"list-group-item list-group-item-action flex-column align-items-start " + ( item.is_read ? "active" : "" ) }>
                
                <div className="row justify-content-between">
                    
                    <div className="col-12">
                        <div className="row">
                            <div className="col-10">
                                {/* The header */}
                                <h5 className="mb-1 header" style={{ color: organisation.accent }}>{ item.title }</h5>
                            </div>
                            <div className="col-2 text-right">
                                <a href={ "https://www.google.com/maps/search/?api=1&query=" + encodeURI(item.full_address) } target="_blank" className="fa-stack fa-lg">
                                    <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                    <i className="fa fa-map-marker fa-stack-1x white-text"></i>
                                </a>
                                <AddToCalendar event={event} color={ organisation.accent }/>
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
                        <p className="mb-1">{ item.location_desciption }, { item.full_address }</p>
                        <br/>

                        {/* Attachments */}
                        <div className="attachments">
                            {item.attachements.map((attachment, attIndex) => (
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
                </div>
            </a>
        );
    }
}

class EventList extends Component {
    render() {

        const { items, organisation } = this.props;

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
                            <Item key={ index } index={ index } item={ item } organisation={ organisation } type={ item.image ? 1 : 0 }/>
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
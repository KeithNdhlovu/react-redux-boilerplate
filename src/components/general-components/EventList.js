import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddToCalendar from './AddToCalendar'
import Moment from 'moment'
import BaseItem from './BaseItem'
import BaseList from './BaseList'

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

            <BaseItem active={item.is_read ? "active" : ""} key={ index }>
                {(isExpanded)=>(
                    <div className="col-12">
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
                        <p className="mb-1">{ item.full_address }</p>
                        <br/>

                        {/* The hidden information */}
                        <p className={"mb-1 " + (isExpanded ? "show" : "hide")}>{ item.description }</p>
                        <br/>

                        {/* Attachments */}
                        <div className={"attachments " + (isExpanded ? "show" : "hide")}>
                            {item.attachments.map((attachment, attIndex) => (
                                <span className="badge badge-pill attachment-items"
                                    key={ attIndex }>
                                    <i className="fa fa-paperclip fa-marg-5 fa-rotate-45" style={{ color: organisation.accent }}></i>
                                    { attachment.title }
                                </span>
                            ))}
                        </div>

                        {/* The tags in their numbers */}
                        <div className="tags text-right">
                            {item.tags.map((tag, tagIndex) => (
                                <span className="badge badge-pill"
                                    key={ tagIndex } 
                                    style={{ backgroundColor: tag.color }}
                                    dangerouslySetInnerHTML={{ __html: tag.name }}>
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </BaseItem>
        );
    }
}

class EventList extends Component {
    
    render() {

        const { items, organisation } = this.props

        items.map((item, index) => {
            Object.assign(item, { expand: false })
        })

        return (

            <BaseList hasItems={ (items.length !== 0) }>
                {() => (
                    <div className="list-group pp-custom">
                        {/* Search filters */}
                        
                        {items.map((item, index) => (
                            
                            <Item key={ index } 
                                index={ index } 
                                item={ item } 
                                organisation={ organisation } 
                                type={ item.image ? 1 : 0 } />
                        ))}
                    </div>                    
                )}
            </BaseList>           
        );
    }
}

EventList.propTypes = {
    items: React.PropTypes.array.isRequired,
    organisation: React.PropTypes.object.isRequired
};

export default EventList;
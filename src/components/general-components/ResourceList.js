import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {

        const { index, item, organisation, type } = this.props

        function formatDate(date) {
            let fDate = new Date(date)
            return {
                day: fDate.getDay(),
                month: fDate.getMonth(),
                time: fDate.getHours()
            };
        }

        return (
            <a  href="#" 
                key={ index } 
                className="list-group-item list-group-item-action flex-column align-items-start">
                
                <div className="row justify-content-between">
                    
                    <div className="col-12">
                        <div className="row">
                            <div className="col-10">
                                {/* The header */}
                                <h5 className="mb-1 header" style={{ color: organisation.accent }}>{ item.title }</h5>
                            </div>
                            <div className="col-2 text-right">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                    <i className="fa fa-map-marker fa-stack-1x white-text"></i>
                                </span>
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                    <i className="fa fa-calendar fa-stack-1x white-text"></i>
                                </span>
                            </div>      
                        </div>

                        {/* The date */}
                        <p className="mb-1">
                            <strong className="date big">10</strong><small className="date small">Jun 13:00</small> 
                            <strong className="separator">-</strong>
                            <strong className="date big">10</strong><small className="date small">Jun 13:00</small>
                        </p>

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
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
                            <div className="col-11">
                                {/* The header */}
                                <h5 className="mb-1 header" style={ item.is_read ? null : { color: organisation.accent } }>{ item.title }</h5>
                            </div>
                            <div className={ "col-1 text-center " + (item.is_read ? "show" : "hide") }>
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* The date @TODO: Format to (dd, d-M'y) */}
                        <p className="date mb-1">{ item.date }</p>


                        {/* The Body */}
                        <p className="mb-1">{ item.body }</p>
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
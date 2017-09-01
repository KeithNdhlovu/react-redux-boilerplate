import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedListComponent extends Component {
    render() {

        const { items } = this.props;

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
                        {items.map((item, index) => (
                            <a  href="#" 
                                key={ index } 
                                className="list-group-item list-group-item-action flex-column align-items-start">
                                
                                <div className="row justify-content-between">
                                    <div className="col-1">
                                        <i className="fa fa-bell" aria-hidden="true" style={ item.is_read ? null : {color: "blue"} }></i>
                                    </div>
                                    <div className="col-11">
                                        {/* The header */}
                                        <h5 className="mb-1 header">{ item.title }</h5>

                                        {/* The date */}
                                        <p className="date mb-1">{ item.created_at }</p>

                                        {/* The Description */}
                                        <p className="mb-1">{ item.body }</p>

                                        {/* The tags in their numbers */}
                                        <div className="tags text-right">
                                            {/*{item.tags.map((tag, tagIndex) => (
                                                <span className="badge badge-pill"
                                                    key={ tagIndex } 
                                                    style={{ backgroundColor: tag.color }}>
                                                    { tag.description }
                                                </span>
                                            ))}*/}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>             
        );
    }
}

FeedListComponent.propTypes = {
    items: React.PropTypes.array.isRequired,
};

export default FeedListComponent;
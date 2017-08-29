import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedListComponent extends Component {
    render() {

        const { items } = this.props;

        return (
            <div className="list-group pp-custom">

                {items.map((item, index) => (
                    <a  href="#" 
                        key={item.id} 
                        className="list-group-item list-group-item-action flex-column align-items-start">
                        
                        <div className="row justify-content-between">
                            <div className="col-1">
                                <i className="fa fa-bell" aria-hidden="true" style={{ color: item.color }}></i>
                            </div>
                            <div className="col-11">
                                {/* The header */}
                                <h5 className="mb-1 header">{ item.header }</h5>

                                {/* The date */}
                                <p className="date mb-1">{ item.date }</p>

                                {/* The Description */}
                                <p className="mb-1">{ item.description }</p>

                                {/* The tags in their numbers */}
                                <div className="tags text-right">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span className="badge badge-pill"
                                              key={ tagIndex } 
                                              style={{ backgroundColor: tag.color }}>
                                              { tag.description }
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>                    
                ))}

            </div>             
        );
    }
}

FeedListComponent.propTypes = {
    items: React.PropTypes.array.isRequired,
};

export default FeedListComponent;
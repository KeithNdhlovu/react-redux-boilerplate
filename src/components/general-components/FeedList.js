import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CustomDropdown from './CustomDropdown'

class Item extends Component {
  
    render() {

        const { index, item, organisation, type } = this.props

        return (
            <a key={ index } 
               className={"list-group-item list-group-item-action flex-column align-items-start " + ( item.is_read ? "active" : "" ) }>
                
                <div className="row justify-content-between">
                    <div className="icon-container">
                        <i className="fa fa-bell fa-m" aria-hidden="true" style={ item.is_read ? null : { color: organisation.accent } }></i>
                    </div>
                    
                    {/* When we have an image, we show it here  */}
                    <div className={ "col-2 " + ((type === 1) ? "show" : "hide") }>
                        <img className="feed-item-image-container" src={ item.image } />
                    </div>
                    
                    <div className={ (type === 1) ? "col-9" : "col-11"}>
                        
                        <div className="row">
                            <div className="col-11">
                                {/* The header */}
                                <h5 className="mb-1 header" style={ item.is_read ? null : { color: organisation.accent } }>{ item.title }</h5>
                            </div>
                            <div className={ "col-1 text-center " + (item.is_read ? "show" : "hide") }>
                                <CustomDropdown items={["Mark As Unread"]} />
                            </div>
                        </div>

                        {/* The date */}
                        <p className="date mb-1">{ item.created_at }</p>

                        {/* The Description */}
                        <p className="mb-1">{ item.body }</p>

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

class FeedList extends Component {
    
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
                        {items.map((item, index) => (
                            <Item key={ index } index={ index } item={ item } organisation={ organisation } type={ item.image ? 1 : 0 }/>
                        ))}
                    </div>
                )}
            </div>             
        );
    }
}

FeedList.propTypes = {
    items: React.PropTypes.array.isRequired,
    organisation: React.PropTypes.object.isRequired
};

export default FeedList;
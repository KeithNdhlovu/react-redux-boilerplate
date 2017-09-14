import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseItem from './BaseItem'
import BaseList from './BaseList'
import Moment from 'moment'
// Global locale to English
Moment.locale('en')

class Item extends Component {
    
    formatDate = (date) => {
        return Moment(date).format("ddd, DD MMM'YY")
    }    
    
    render() {

        const { index, item, type } = this.props

        return (
            <BaseItem active={item.is_read ? "active" : ""} key={ index }>
                {(isExpanded)=>(
                    <div className="col-12">
                        <div className="row">
                            <div className="col-11">
                                {/* The header */}
                                <h5 className="mb-1 header">{ item.title }</h5>
                            </div>
                            <div className={ "col-1 text-center " + (item.is_read ? "show" : "") }>
                                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* The date @TODO: Format to (dd, d-M'y) */}
                                <p className="date mb-1">{ this.formatDate(item.date) }</p>


                                {/* The Body */}
                                <p className={"mb-1 " + (isExpanded ? "" : "truncate")}>{ item.body }</p>
                                <br/>
                            </div>                                
                        </div>
                    </div>
                )}
            </BaseItem>
        );
    }
}

class ResourceList extends Component {
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
                        {/* Search filters */}
                        

                        {items.map((item, index) => (
                            <Item key={ index } index={ index } item={ item } type={ 1 }/>
                        ))}
                    </div>
                )}
            </div>             
        );
    }
}

ResourceList.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default ResourceList;
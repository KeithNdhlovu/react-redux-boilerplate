import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddToCalendar from './AddToCalendar'
import Moment from 'moment'
import BaseItem from './BaseItem'
import BaseList from './BaseList'
import DefaultLogo from '../../styles/images/logo.png'

class Item extends Component {

    render() {

        const { index, item, organisation, type } = this.props

        let event = {
            title: item.title,
            description: null,
            location: item.full_address,
            start_datetime: null,
            end: null
        };

        return (

            <BaseItem active={item.is_read ? "active" : ""} key={ index }>
                {(isExpanded)=>(
                    <div className="col-12">
                        <div className="row">
                            <div className="col-9">
                                <div className="vertical-align">
                                    <img className="contact-item-image-container" src={ item.logo } />
                                    <h6 className="mb-1 header" style={{ color: organisation.accent }}>{ item.name }</h6>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="float-right flex-display">
                                    <a href={ "https://www.google.com/maps/search/?api=1&query=" + encodeURI(item.physical_address) } target="_blank" className="fa-stack fa-lg">
                                        <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                        <i className="fa fa-map-marker fa-stack-1x white-text"></i>
                                    </a>
                                    <a href={ "mailto:" +item.email_address } target="_blank" className="fa-stack fa-lg">
                                        <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                        <i className="fa fa-envelope fa-stack-1x white-text"></i>
                                    </a>
                                </div>
                            </div>  
                        </div>

                        <br/>
                        <div className="row">
                            <div className="col-6">
                                <div className="verical-align">
                                    <div className="row">
                                        <i className="w-20 fa fa-map-marker fa-m" aria-hidden="true" style={{ color: organisation.accent }}></i>
                                        <p className="w-80 no-margin">{ item.physical_address }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 verical-align">
                                        <div className="row mb-10">
                                            <i className="w-20 fa fa-phone fa-m" aria-hidden="true" style={{ color: organisation.accent }}></i>
                                            <p className="w-80 no-margin">{ item.telephone_number }</p>
                                        </div>
                                    </div>
                                    <div className="col-12 verical-align">
                                        <div className="row">
                                            <i className="w-20 fa fa-envelope fa-m" aria-hidden="true" style={{ color: organisation.accent }}></i>
                                            <p className="w-80 no-margin">{ item.email_address }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Number of contacts */}
                        <br/>
                        <div className="contacts-count-container row text-right">
                            <span className="col-12" style={{ color: organisation.accent }}><i className={"animate-rotation fa fa-plus "+ (isExpanded ? "fa-rotate-45" : "")  }></i>&nbsp;&nbsp;{ item.contacts.length }&nbsp;&nbsp;Contacts</span>
                        </div>
                        <br/>

                        {/* Show nested contacts */}                        
                        <div className={"row nested-child " + ( isExpanded ? "show" : "hide" )}>
                            {item.contacts.map((contact, contactIndex) => (
                                <div className="col-12 list-group-item" key={ contactIndex }>
                                    <div className="row">
                                        <div className="col-9">
                                            <h6 className="mb-1 header" style={{ color: organisation.accent }}>{ contact.role }</h6>
                                            <h6 className="mb-1 header-2">{ contact.name }</h6>
                                        </div>
                                        <div className="col-3">
                                            <div className="float-right flex-display">
                                                <a href={ "mailto:" +contact.email } target="_blank" className="fa-stack fa-lg">
                                                    <i className="fa fa-square fa-stack-2x" style={{ color: organisation.accent }}></i>
                                                    <i className="fa fa-envelope fa-stack-1x white-text"></i>
                                                </a>
                                            </div>
                                        </div>  
                                    </div>
                                    <br/>


                                    <div className="row">
                                        <div className="col-6 verical-align">
                                            <div className="row mb-10">
                                                <i className="w-20 fa fa-phone fa-m" aria-hidden="true" style={{ color: organisation.accent }}></i>
                                                <p className="w-80 no-margin">{ contact.phone }</p>
                                            </div>
                                        </div>
                                        <div className="col-6 verical-align">
                                            <div className="row">
                                                <i className="w-20 fa fa-envelope fa-m" aria-hidden="true" style={{ color: organisation.accent }}></i>
                                                <p className="w-80 no-margin">{ contact.email }</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </BaseItem>
        );
    }
}

class ContactList extends Component {
    
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

ContactList.propTypes = {
    items: React.PropTypes.array.isRequired,
    organisation: React.PropTypes.object.isRequired
};

export default ContactList;
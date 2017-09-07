import React, { Component } from 'react';
import PropTypes from 'prop-types';



class BaseItem extends Component {
    
    render() {

        return (
            <a  href="#"
                className="list-group-item list-group-item-action flex-column align-items-start">
                
                <div className="row justify-content-between">
                    {/* Different item types comes in here */}
                </div>
            </a>
        );
    }
}

export default BaseItem;
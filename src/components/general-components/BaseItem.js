import React, { Component } from 'react';
import PropTypes from 'prop-types';



class BaseItem extends Component {
    
    render() {

        const { props } = this

        return (
            <div className={"base-item list-group-item list-group-item-action flex-column align-items-start " + props.active}>
                
                <div className="row justify-content-between">
                    { props.children }
                </div>
            </div>
        );
    }
}

export default BaseItem;
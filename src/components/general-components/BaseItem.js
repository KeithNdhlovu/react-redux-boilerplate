import React, { Component } from 'react';
import PropTypes from 'prop-types';



class BaseItem extends Component {
    constructor(props) {
        super(props);
        let initialState = {
            isExpanded: false
        }
        this.state = initialState
        this.initialState = initialState
    }
    
    togleOpen = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    render() {

        return (
            <div 
                onClick={ this.togleOpen.bind(this) }
                className={"base-item list-group-item list-group-item-action flex-column align-items-start " + this.props.active}>
                
                <div className="row justify-content-between">
                    { this.props.children(this.state.isExpanded) }
                </div>
            </div>
        );
    }
}

BaseItem.propTypes = {
    children: React.PropTypes.func.isRequired,
}


export default BaseItem;
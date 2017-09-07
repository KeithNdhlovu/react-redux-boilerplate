import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BaseList extends Component {
    constructor(props) {
        super(props);
        
        const initialState = {
            expand: false,
            selectedItem: null
        }

        this.initialState = initialState
        this.state = initialState
    }

    toggleOpen = (data) => {
        
        const { items, item } = data
        
        let that = this;

        items.map((_item, index) => {

            if (_item.id != item.id) {
                Object.assign(_item, { expand: false })
            }
        })

        Object.assign(item, { expand: true })


        this.setState({
            expand: !this.state.expand,
            selectedItem: item.id
        })

        console.log("Expand", this.state.expand)
    }

    render() {

        const { hasItems } = this.props;

        return (
            <div>
                {(!hasItems) ? (
                    <div className="list-group pp-custom">
                        <a  href="#"
                            className="list-group-item list-group-item-action flex-column align-items-start">
                            
                            <div className="row justify-content-between">
                                <div className="col-12">
                                    <h5 className="mb-1 header text-center">Nothing for now</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                ) : (
                    
                    <div className="list-group pp-custom">
                        { this.props.children(this.toggleOpen, this.state) }
                    </div>
                )}
            </div>             
        );
    }
}

BaseList.propTypes = {
    hasItems: React.PropTypes.bool.isRequired,
    children: React.PropTypes.func.isRequired,
}

export default BaseList
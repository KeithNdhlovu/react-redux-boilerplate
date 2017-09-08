import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BaseList extends Component {
    constructor(props) {
        super(props);
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
                        { this.props.children() }
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BaseList extends Component {
    constructor(props) {
        super(props);

    }

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
                                    <h5 className="mb-1 header text-center">Nothing for now</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                ) : (
                    
                    <div className="list-group pp-custom">
                        {/* Items here */}
                    </div>
                )}
            </div>             
        );
    }
}

BaseList.propTypes = {
    items: React.PropTypes.array.isRequired,
    organisation: React.PropTypes.object.isRequired,
    behaviour: React.PropTypes.func.isRequired,
};

export default BaseList;
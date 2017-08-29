import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedListComponent extends Component {
    render() {
        return (
            <div class="list-group col-12">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                    <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                </a>
            </div>            
        );
    }
}

FeedListComponent.propTypes = {
    
};

export default FeedListComponent;
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'

class CustomSelect extends Component {
    
    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            selectValue: null,
        };
    }

	updateValue (newValue) {
		this.setState({
			selectValue: newValue
		});
	}

    render() {
        const { options, clearable, disabled, searchable } = this.props;

        return (
            <Select 
                options={ options }
                clearable={ clearable } 
                disabled={ disabled } 
                value={ this.state.selectValue } 
                onChange={ this.updateValue } 
                searchable={ searchable } />
        );
    }
}


CustomSelect.propTypes = {
    options:    React.PropTypes.array.isRequired, 
    clearable:  React.PropTypes.bool.isRequired, 
    disabled:   React.PropTypes.bool.isRequired, 
    searchable: React.PropTypes.bool.isRequired,
};


export default CustomSelect;
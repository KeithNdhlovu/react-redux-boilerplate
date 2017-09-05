import React, { Component } from 'react';
import { Dropdown, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class CustomDropdown extends Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        const { items } = this.props;

        return (
            <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
                <i className="fa fa-chevron-down" onClick={ this.toggle }></i>
                <DropdownMenu className="pp-dropdown-menu-right">
                    {items.map((item, index) => (
                        <DropdownItem key={ index } >{ item }</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default CustomDropdown;
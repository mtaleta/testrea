import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class PostsNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Automotive Life/">Automotive Life</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Design/">Design</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Innovation/">Innovation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Performance/">Performance</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Models/">Models</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
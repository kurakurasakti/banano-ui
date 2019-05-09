import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { connect } from 'react-redux';

class Header extends  React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  componentDidMount(){

  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:"whitesmoke"}} light>
          <NavbarToggler onClick={this.toggleNavbar} style={{borderColor : "transparent"}} className="mr-2" />
          <NavbarBrand href="/" className="mx-auto" >BANANO</NavbarBrand>
          <NavbarBrand onClick={this.onClikCart} className="ml-2">CART</NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar style={{justifyContent : "center"}}>
              <NavItem>
                <NavLink href="/components/">Outer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Top</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Bottom</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    )
  };
};
// const connectedNavbar = connect(Header);
// export { connectedNavbar as Navbar };



export default Header

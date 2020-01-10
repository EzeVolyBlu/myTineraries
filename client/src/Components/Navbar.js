import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './styles.css';

const NavBar = (props) => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const isLogged = props.usersReducer.isLogged 

  return (
    <div className="w-100">
      <Navbar color="light" light>
        {/* <NavbarBrand href="/" className="mr-auto">MyTineraries</NavbarBrand> */}
        <UncontrolledDropdown >
              <DropdownToggle nav caret className="text-secondary">
                {/* Options */}
                <i className="material-icons login-icon">
                  <img className="rounded-circle navbar-avatar" src={props.usersReducer.avatar} alt="avatar" />

                </i>
              </DropdownToggle>
              <DropdownMenu right className="hardcode-menu">

                <DropdownItem disabled={isLogged}>
                  <Link to="/login">
                    Login
                  </Link>
                </DropdownItem>

                <DropdownItem disabled={isLogged}>
                  <Link to="/create-account">
                    Create Account
                  </Link>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem disabled={!isLogged}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      usersReducer: state.usersReducer
  }
}


export default connect(
  mapStateToProps,
  null)
  (NavBar);
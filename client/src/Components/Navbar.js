import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';


import './styles.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="w-100">
      <Navbar color="light" light>
        {/* <NavbarBrand href="/" className="mr-auto">MyTineraries</NavbarBrand> */}
        <UncontrolledDropdown >
              <DropdownToggle nav caret className="text-secondary">
                {/* Options */}
                <i className="material-icons login-icon">
                  account_circle
                </i>
              </DropdownToggle>
              <DropdownMenu right className="hardcode-menu">
                <DropdownItem>
                  Login
                </DropdownItem>
                <DropdownItem>
                  <Link to="/create-account">
                    Create Account
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
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

export default NavBar;
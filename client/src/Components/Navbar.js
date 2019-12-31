import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledDropdown } from 'reactstrap';

import './styles.css';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
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
                  Create Account
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
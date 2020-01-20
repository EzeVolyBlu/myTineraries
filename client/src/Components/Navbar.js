import React, { Component } from 'react';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, DropdownToggle,
  DropdownMenu,
  DropdownItem, UncontrolledDropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  logout,
  checkToken 
} from '../store/actions/loginActions'

import './styles.css';

class NavBar extends Component {

  constructor(props){
    super(props);

    this.state = {
        collapsed: true,
        token: ''
    }

  }

  componentDidMount(){
    this.props.checkToken(this.props.token)    
  }

  render() {

  const avatar = this.props.loginReducer.user.avatar;
  // const { avatar } = this.props.loginReducer.user;






    const toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })

    };

    const logout = () => {
      this.props.logout()
      
    }

    // const [collapsed, setCollapsed] = useState(true);


    const isLogged = this.props.loginReducer.isLogged
    return (
      <div className="w-100">
        <Navbar color="light" light>
          {/* <NavbarBrand href="/" className="mr-auto">MyTineraries</NavbarBrand> */}
          <UncontrolledDropdown >
            <DropdownToggle nav caret className="text-secondary">
              {/* Options */}
              <i className="material-icons login-icon">
                <img className="rounded-circle navbar-avatar" src={avatar} alt="avatar" />

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
              <DropdownItem disabled={!isLogged} onClick={logout}>
                Logout
                  </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>

                {(this.props.loginReducer.isLogged ? 
                <NavLink href={`/user/profile/${this.props.loginReducer.token}`}>My Profile</NavLink> :
                <NavLink href={`/login`}>My Profile</NavLink>)}


              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/itineraries">Itineraries</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
      loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(logout()),
      checkToken: (token) => dispatch(checkToken(token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (NavBar);
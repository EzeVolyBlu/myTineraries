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
  checkToken } from '../store/actions/loginActions'

import './styles.css';

class NavBar extends Component {

  constructor(props){
    super(props);

    this.state = {
        // isLogged: this.props.loginReducer.isLogged,
        collapsed: true
    }

  }

  componentDidMount(){
    
    this.props.checkToken(this.props.loginReducer.token)

  }

  componentDidUpdate(){
    
    this.props.checkToken(this.props.loginReducer.token)

  }

  // componentDidUpdate(){
  //   this.props.checkToken()
  // }


  render() {



    const { avatar } = this.props.loginReducer.user;






    const toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })

    };

    const logout = () => {
      this.props.logout()
      console.log(this.props.loginReducer);
      
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

}

const mapStateToProps = state => {
  return {
      loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(logout()),
      checkToken: () => dispatch(checkToken())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (NavBar);
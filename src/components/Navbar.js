import React from 'react';
import {connect} from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown, ButtonDropdown,
Button } from 'reactstrap';
import {
  Link
} from 'react-router-dom'
import {unSetAuthedUser} from "../actions/authUser";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
    this.logout = this.logout.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleUser() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  logout() {
    this.props.dispatch(unSetAuthedUser())
    
}
  render() {
    
    return (
        <Navbar expand="md" >
          <NavbarBrand href="/"><img src={`http://governmentjobstore.in/logos/logo3.png`}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#job" style={{paddingTop:'8px'}}>Latestjobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#admitcards" style={{paddingTop:'8px'}}>Admitcards</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#results" style={{paddingTop:'8px'}}>Examresults</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#category" style={{paddingTop:'8px'}}>Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#touch" style={{paddingTop:'8px'}}>Get-in-touch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{paddingTop:'4px'}}><div id="google_translate_element"></div></NavLink>
              </NavItem> 
               
              {/* {this.props.loggedIn?
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleUser}>
                <DropdownToggle >
                <i class="fas fa-user-circle"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem ><Link to={'/savedjobs'} >Saved Jobs</Link></DropdownItem>
                  <DropdownItem><Link to={'/savedblogs'} >Saved blogs</Link></DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem><a onClick={this.logout}>Logout</a></DropdownItem>
                </DropdownMenu>
              </Dropdown>:<Button color="primary"><Link to={'/login'}>Login</Link></Button>
              } */}
                     
            </Nav>
          </Collapse>
          
        </Navbar>
    );
  }
}

function mapStateToProps({authUser}) {

  return {
      loggedIn: authUser.loggedIn,
      attemptFailure:authUser.attemptFailure
  }
}

export default connect(mapStateToProps)(NavbarComponent);
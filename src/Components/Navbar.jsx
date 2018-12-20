import React from 'react';
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
  DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CityView from './CityView';
import Map from './Map';

export default class Example extends React.Component {
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
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Tribal Wars</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/leaderboards/">Leaderboards</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/map/">Mapa</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Logout
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <Route exact path="/" component={CityView} />
          <Route exact path="/Map" component={Map} />
          


        </div>
      </Router>
    );
  }
}

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import { Link } from 'react-router-dom';

const SignedInLinks = () => (
  <Nav className="ml-auto" navbar>
    <LinkContainer to="/">
      <NavLink>Map</NavLink>
    </LinkContainer>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        { 'Welcome to SHU!' }
        <DropdownMenu right>
          <DropdownItem>
            <LinkContainer to="/admin">
              <div>Administrators</div>
            </LinkContainer>
          </DropdownItem>
        </DropdownMenu>
      </DropdownToggle>
    </UncontrolledDropdown>
  </Nav>
);

SignedInLinks.defaultProps = {

};

SignedInLinks.propTypes = {

};

export default (SignedInLinks);

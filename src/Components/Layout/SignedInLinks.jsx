import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
} from 'reactstrap';


const SignedInLinks = () => (
  <Nav className="ml-auto" navbar>
    <LinkContainer to="/">
      <NavLink>Map</NavLink>
    </LinkContainer>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav>
        { 'Welcome to SHU!' }
      </DropdownToggle>
    </UncontrolledDropdown>
  </Nav>
);

SignedInLinks.defaultProps = {

};

SignedInLinks.propTypes = {

};

export default (SignedInLinks);

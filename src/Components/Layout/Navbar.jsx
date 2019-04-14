import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';
import styles from './styles';

const WBNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const {
    light,
    dark,
    fixed,
    color,
    role,
    brand,
    expand,
  } = props;

  const links = <SignedInLinks />;

  return (
    <div>
      <Navbar
        className="shadow"
        style={styles}
        dark={dark}
        light={light}
        fixed={fixed}
        color={color}
        role={role}
        expand={expand}
      >
        <NavbarBrand tag={Link} to="/">{ brand }</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          { links }
        </Collapse>
      </Navbar>
    </div>
  );
};

WBNavbar.defaultProps = {
  light: false,
  dark: false,
  fixed: 'fixed-top',
  color: '',
  role: 'navigation',
  brand: '',
  expand: [true, 'md'],
};

WBNavbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  brand: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default WBNavbar;

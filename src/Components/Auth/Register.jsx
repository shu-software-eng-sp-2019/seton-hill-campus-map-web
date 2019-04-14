import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AuthCard from './AuthCard';
import Styles from './styles';
import { emailReg } from '../../Store/Actions/authActions';


const Register = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailRegister } = props;
    emailRegister({
      firstName, lastName, email, password, confirmPassword,
    });
  };

  // const { auth, authError } = props;
  // if (auth.uid) return <Redirect to="/" />;
  return (
    <AuthCard outline>
      <Form onSubmit={handleSubmit}>
        <FormGroup row className="text-center">
          <div className="col-12">
            <h4>Register</h4>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label for="firstName">First Name</Label>
          <Input required type="text" name="firstName" value={firstName} id="firstName" placeholder="First name..." onChange={e => setFirstName(e.target.value)} />
        </FormGroup>
        <FormGroup row>
          <Label for="lastName">Last Name</Label>
          <Input required type="text" name="lastName" id="lastName" value={lastName} placeholder="Last name..." onChange={e => setLastName(e.target.value)} />
        </FormGroup>
        <FormGroup row>
          <Label for="email">Email</Label>
          <Input required type="email" name="email" id="email" value={email} placeholder="Email..." onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup row>
          <Label for="password">Password</Label>
          <Input required type="password" name="password" id="password" value={password} placeholder="Password..." onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup row>
          <Label for="passwordConfirm">Confirm Password</Label>
          <Input
            required
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password..."
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup row className="text-center text-muted">
          <div className="col-12">
            <Label>
              <Link style={Styles.linkDecoration} to="/signin">Go back to sign in</Link>
            </Label>
          </div>
        </FormGroup>
        {/* <Alert isOpen={!!authError} color="danger">{ authError || null }</Alert> */}
        <Button>Register</Button>
      </Form>
    </AuthCard>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  emailRegister: newUser => dispatch(emailReg(newUser)),
});

Register.defaultProps = {
  emailRegister: () => null,
  // authError: null,
};

Register.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // auth: PropTypes.object.isRequired,
  emailRegister: PropTypes.func,
  // authError: PropTypes.string,
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),
)(Register);

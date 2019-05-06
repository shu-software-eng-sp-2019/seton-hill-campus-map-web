import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Alert,
} from 'reactstrap';
import GoogleButton from 'react-google-button';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Styles from './styles';
import AuthCard from './AuthCard';
import { signIn, googleSignIn } from '../../Store/Actions/authActions';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerText] = useState("Don't have an account?");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firebaseSignIn } = props;
    firebaseSignIn({ email, password });
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    const { googleFirebaseSignIn } = props;
    googleFirebaseSignIn();
  };

  const { authError, auth } = props;
  if (auth.uid) return <Redirect to="/" />;
  return (
    <AuthCard outline>
      <Form onSubmit={handleSubmit}>
        <FormGroup row className="text-center">
          <div className="col-12">
            <h4>Sign In</h4>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label for="email">Email</Label>
          <Input required type="email" name="email" id="email" value={email} placeholder="Email..." onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup row>
          <Label for="password">Password</Label>
          <Input required type="password" name="password" id="password" value={password} placeholder="Password..." onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup row className="text-center text-muted">
          <div className="col-12">
            <Label>
              { registerText }
              {' '}
              <Link style={Styles.linkDecoration} to="/register">Register now!</Link>
            </Label>
          </div>
        </FormGroup>
        <Alert isOpen={!!authError} color="danger">{ authError || null }</Alert>
        <Button style={{ backgroundColor: '#C00026', borderColor: '#C00026' }}>Sign In</Button>
        <br />
      </Form>
      <hr />
      <GoogleButton style={{ height: '50px', width: '100%' }} onClick={googleSignIn} type="dark" />
    </AuthCard>
  );
};

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  firebaseSignIn: creds => dispatch(signIn(creds)),
  googleFirebaseSignIn: () => dispatch(googleSignIn()),
});

SignIn.defaultProps = {
  firebaseSignIn: () => null,
  googleFirebaseSignIn: () => null,
  authError: null,
};

SignIn.propTypes = {
  firebaseSignIn: PropTypes.func,
  googleFirebaseSignIn: PropTypes.func,
  authError: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired,
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps),
)(SignIn);

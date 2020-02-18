import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import AuthCard from './AuthCard';
import { signIn } from '../../Store/Actions/authActions';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const { firebaseSignIn } = props;
    firebaseSignIn({ email, password });
  };

  const { authError, auth } = props;
  if (auth.uid) return <Redirect to='/' />;
  return (
    <AuthCard outline>
      <Form onSubmit={handleSubmit}>
        <FormGroup row className='text-center'>
          <div className='col-12'>
            <h4>Sign In</h4>
          </div>
        </FormGroup>
        <FormGroup row>
          <Label for='email'>Email</Label>
          <Input
            required
            type='email'
            name='email'
            id='email'
            value={email}
            placeholder='Email...'
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup row>
          <Label for='password'>Password</Label>
          <Input
            required
            type='password'
            name='password'
            id='password'
            value={password}
            placeholder='Password...'
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Alert isOpen={!!authError} color='danger'>
          {authError || null}
        </Alert>
        <Button style={{ backgroundColor: '#C00026', borderColor: '#C00026' }}>
          Sign In
        </Button>
        <br />
      </Form>
      <hr />
    </AuthCard>
  );
};

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  firebaseSignIn: creds => dispatch(signIn(creds))
});

SignIn.defaultProps = {
  firebaseSignIn: () => null,
  authError: null
};

SignIn.propTypes = {
  firebaseSignIn: PropTypes.func,
  authError: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);

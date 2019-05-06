import React from 'react';
import { Redirect } from 'react-router';
import {
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signOut } from '../../Store/Actions/authActions';
const BuildingAdmin = React.lazy(() => import('./BuildingAdmin'));
const ParkingLotAdmin = React.lazy(() => import('./ParkingLotAdmin'));

const AdminDashboard = (props) => {
  const { auth, firebaseSignOut } = props;
  if (!auth.uid) { return <Redirect to="/signin" />; }
  return (
    <div className="container-fluid" style={{ height: '100%', width: '100%', marginBottom: '60px' }}>
      <Button onClick={firebaseSignOut} className={'mt-2'} style={{float: 'right'}}>Sign Out</Button>
      <BuildingAdmin />
      <ParkingLotAdmin />
    </div>
  );
};

AdminDashboard.defaultProps = {
  auth: {},
  firebaseSignOut: null,
};

AdminDashboard.propTypes = {
  auth: PropTypes.object,
  firebaseSignOut: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  firebaseSignOut: () => dispatch(signOut()),
});

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(AdminDashboard);



import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Map from '../Map/Map';

const Dashboard = () => (
  // if (!auth.uid) return <Redirect to="/signin" />;
  <div className="" style={{ height: '100%', width: '100%' }}>
    <Map />
  </div>
);


Dashboard.defaultProps = {

};

Dashboard.propTypes = {

};

const mapStateToProps = state => ({
  trips: state.firestore.ordered.trips,
  notifications: state.firestore.ordered['notifications?limit=5'],
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'trips', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] },
  ]),
)(Dashboard);

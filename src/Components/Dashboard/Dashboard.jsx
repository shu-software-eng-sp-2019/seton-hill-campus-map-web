
import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';
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

// const mapStateToProps = state => ({
//   auth: state.firebase.auth,
// });

export default Dashboard

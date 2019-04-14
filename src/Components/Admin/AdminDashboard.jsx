import React from 'react';
// import Map from '../Map/Map';
const BuildingAdmin = React.lazy(() => import('./BuildingAdmin'));

const AdminDashboard = () => (
  // if (!auth.uid) return <Redirect to="/signin" />;
  <div className="container-fluid" style={{ height: '100%', width: '100%', marginBottom: '60px' }}>
    <BuildingAdmin />
  </div>
);

export default AdminDashboard;

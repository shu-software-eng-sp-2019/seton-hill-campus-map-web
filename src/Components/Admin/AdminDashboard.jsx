import React from 'react';
const BuildingAdmin = React.lazy(() => import('./BuildingAdmin'));
const ParkingLotAdmin = React.lazy(() => import('./ParkingLotAdmin'));

const AdminDashboard = () => (
  // if (!auth.uid) return <Redirect to="/signin" />;
  <div className="container-fluid" style={{ height: '100%', width: '100%', marginBottom: '60px' }}>
    <BuildingAdmin />
    <ParkingLotAdmin />
  </div>
);

export default AdminDashboard;

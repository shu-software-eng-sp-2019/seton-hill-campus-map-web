import React, { lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// COMPONENTS
import NavBar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Dashboard from './Components/Dashboard/Dashboard';

const AdminDashboard = lazy(() => import('./Components/Admin/AdminDashboard'));
const SignIn = lazy(() => import('./Components/Auth/SignIn'));
const Register = lazy(() => import('./Components/Auth/Register'));

const App = () => (
  <div style={{ height: '90%', width: '100%' }}>
    <NavBar brand="Seton Hill Campus Map" dark fixed="fixed-top" expand="md" />
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <Dashboard />} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/admin" component={() => <AdminDashboard />} />
          <Route exact path="/signin" component={() => <SignIn />} />
          <Route path="/register" component={() => <Register />} />
        </Suspense>
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;

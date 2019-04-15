import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import auth from './authReducer';
import admin from './adminReducer';
import map from './mapReducer.js';

export default combineReducers({
  auth,
  admin,
  map,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

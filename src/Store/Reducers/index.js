import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import auth from './authReducer';
import admin from './adminReducer';

export default combineReducers({
  auth,
  admin,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

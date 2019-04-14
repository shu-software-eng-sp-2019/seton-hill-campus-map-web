/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers';
import firebase from '../Config/firebase';

// ======================================================
// Middleware Configuration
// ======================================================
const middleware = [
  thunk.withExtraArgument({ getFirestore }),
  // This is where you add other middleware like redux-observable
];


const store = () => createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    reduxFirestore(firebase),
  ),
);

export default store;

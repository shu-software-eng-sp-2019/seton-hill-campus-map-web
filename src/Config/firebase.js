
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'shusoftwareeng.firebaseapp.com',
  databaseURL: 'https://shusoftwareeng.firebaseio.com',
  projectId: 'shusoftwareeng',
  storageBucket: 'shusoftwareeng.appspot.com',
  messagingSenderId: '258164846865',
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;

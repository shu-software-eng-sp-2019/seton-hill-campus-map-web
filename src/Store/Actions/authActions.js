import firebase from '../../Config/firebase';

const signIn = credentials => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err });
  });
};

const googleSignIn = () => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const { user } = result;
    const firstName = user.displayName.split(' ')[0];
    const lastName = user.displayName.split(' ')[1];
    firestore.collection('users').doc(user.uid).set({
      firstName,
      lastName,
      initials: firstName[0] + lastName[0],
    })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  }).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  })
    .catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
};

const signOut = () => (dispatch) => {
  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  });
};

const emailReg = newUser => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
  ).then(response => firestore.collection('users').doc(response.user.uid).set({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    initials: newUser.firstName[0] + newUser.lastName[0],
  })).then(() => {
    dispatch({ type: 'REGISTER_SUCCESS' });
  })
    .catch((err) => {
      dispatch({ type: 'REGISTER_ERROR', err });
    });
};

export {
  signIn, googleSignIn, signOut, emailReg,
};


import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
// REDUX / FIREBASE
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import firebase from './Config/firebase';
import createStore from './Store';
import rrfConfig from './Config/rrfConfig';
// import { fetchDataset } from './Store/Actions/adminActions';
import 'mapbox-gl/dist/mapbox-gl.css';
// APP
import App from './App';
import { unregister } from './serviceWorker';

import mapboxgl from 'mapbox-gl';

const store = createStore();

// store.dispatch(fetchDataset());

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const root = document.getElementById('root');

const load = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
  render((
    <AppContainer style={{ height: '100%', width: '100%' }}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
            <App store={store} />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </AppContainer>
  ), root);
};

unregister();

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();

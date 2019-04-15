import { GET_BUILDINGS, GET_BUILDING_ERR } from './types';

export const getBuildings = () => (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const buildings = firestore.get({
        collection: 'buildings',
        orderBy: ['name'],
    })
    .then(() => {
      dispatch({ type: GET_BUILDINGS, buildings });
    }).catch((err) => {
      dispatch({ type: GET_BUILDING_ERR, err });
    });
  };
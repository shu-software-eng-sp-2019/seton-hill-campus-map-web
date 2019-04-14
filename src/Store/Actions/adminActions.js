
import { CREATE_BUILDING, CREATE_FEATURE } from './types';

export const createFeatureSuccess = data => ({
  type: CREATE_FEATURE,
  payload: {
    _id: data.id,
    title: data.title,
    body: data.body,
  },
});

export const createBuilding = building => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const coords = new firestore.GeoPoint(Number(building.latitude), Number(building.longitude));
  firestore.collection('buildings').add({
    coordinates: coords,
    description: building.description,
    hasClassrooms: Boolean(building.hasClassrooms),
    iconName: building.iconName,
    levels: Number(building.levels),
    name: building.name,
    type: building.type,
  }).then(() => {
    dispatch({ type: CREATE_BUILDING, building });
  }).catch((err) => {
    dispatch({ type: 'CREATE_BUILDING_ERR', err });
  });
};

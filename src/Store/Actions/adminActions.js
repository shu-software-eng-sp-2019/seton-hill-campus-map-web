
import { CREATE_BUILDING, CREATE_BUILDING_ERR, CREATE_PARKING_LOT, CREATE_PARKING_LOT_ERR } from './types';

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
    dispatch({ type: CREATE_BUILDING_ERR, err });
  });
};

export const createParkingLot = parkingLot => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const coords = new firestore.GeoPoint(Number(parkingLot.latitude), Number(parkingLot.longitude));
  firestore.collection('parkingLots').add({
    coordinates: coords,
    description: parkingLot.description,
    commuterLot: Boolean(parkingLot.commuterLot),
    publicLot: Boolean(parkingLot.publicLot),
    name: parkingLot.name,
  }).then(() => {
    dispatch({ type: CREATE_PARKING_LOT, parkingLot });
  }).catch((err) => {
    dispatch({ type: CREATE_PARKING_LOT_ERR, err });
  });
};

import { CREATE_BUILDING, CREATE_BUILDING_ERR, CREATE_PARKING_LOT, CREATE_PARKING_LOT_ERR } from '../Actions/types';

const initState = {
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_BUILDING:
      // eslint-disable-next-line no-alert
      alert('building created!');
      return state;
    case CREATE_BUILDING_ERR:
      // eslint-disable-next-line no-console
      console.log(`create building error ${action.err}`);
      return state;
    case CREATE_PARKING_LOT:
      // eslint-disable-next-line no-alert
      alert('lot created!');
      return state;
    case CREATE_PARKING_LOT_ERR:
      // eslint-disable-next-line no-console
      console.log(`create lot error ${action.err}`);
      return state;
    default:
      return state;
  }
};

export default adminReducer;

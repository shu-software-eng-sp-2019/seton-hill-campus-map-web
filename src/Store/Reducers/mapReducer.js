import { GET_BUILDINGS, GET_BUILDING_ERR } from '../Actions/types';

const initState = {
};

const mapReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BUILDINGS:
      return state;
    case GET_BUILDING_ERR:
      // eslint-disable-next-line no-console
      console.log(`get building error ${action.err}`);
      return state;
    default:
      return state;
  }
};

export default mapReducer;
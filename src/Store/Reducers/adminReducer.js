import { CREATE_BUILDING, CREATE_BUILDING_ERR } from '../Actions/types';

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
    default:
      return state;
  }
};

export default adminReducer;

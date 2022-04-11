import {
  LOGIN_USER,
  CREATE_USER,
  GET_RATINGS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginDeatils: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        registerDetails: action.payload,
      };
    case GET_RATINGS:
      console.log(action.payload.result[0].rating);
      return {
        ...state,
        userDetails:action.payload,
        rate:action.payload?action.payload.result[0].rating:0,
      };
    default:
      return state;
  }
};

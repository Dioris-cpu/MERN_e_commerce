import {
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    // REQUEST DATA TO THE PAYLOAD
    case USER_LOGIN_REQUEST:
      return { loading: true };
    // IF SUCESSFUL SEND THE DATA TO THE PAYLOAD
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    // SEND ERROR TO THE PAYLOAD
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
      case USER_LOGOUT:
          return {}
    default:
      return state;
  }
};

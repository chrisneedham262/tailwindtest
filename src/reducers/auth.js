import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  LOGOUT,
} from "../actions/types";

const intialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  // isAuthenticated: localStorage.getItem('isAuthenticated'),
  isAuthenticated: null,
  user: {},
};

export default function (state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("isAuthenticated", true);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };

    case AUTHENTICATED_FAIL:
      localStorage.setItem("isAuthenticated", false);
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refesh: null,
        isAuthenticate: false,
        user: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

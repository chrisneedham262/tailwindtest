import {
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "../actions/types";

const initialState = {
  first_name: "",
  last_name: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_PROFILE_SUCCESS:
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,

        first_name: payload.profile.first_name,
        last_name: payload.profile.last_name,
      };
    case LOAD_USER_PROFILE_FAIL:
      return {
        ...state,

        first_name: "",
        last_name: "",
      };
    case UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

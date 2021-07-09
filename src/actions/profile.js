import axios from "axios";
import {
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "./types";

export const load_user = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/profile/user`,
      config
    );

    if (res.data.error) {
      dispatch({
        type: LOAD_USER_PROFILE_FAIL,
      });
    } else {
      dispatch({
        type: LOAD_USER_PROFILE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_PROFILE_FAIL,
    });
  }
};

export const update_profile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  };

  const body = JSON.stringify(formData);
  //   {
  //   withCredentials: true,
  //   formData,
  // });

  console.log("the body is=======", body);

  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/profile/users/`,
      body,
      config
    );

    if (res.data.profile && res.data.username) {
      dispatch({
        type: UPDATE_USER_PROFILE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: UPDATE_USER_PROFILE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: UPDATE_USER_PROFILE_FAIL,
    });
  }
};

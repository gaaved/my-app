import * as actionTypes from "./actionTypes";

export const setUserInfo = (email, userName) => ({
  type: actionTypes.SET_USER_INFO,
  payload: { email, userName },
});

export const setUserInfoSuccess = () => ({
  type: actionTypes.SET_USER_INFO_SUCCESS,
});

export const setUserInfoError = () => ({
  type: actionTypes.SET_USER_INFO_ERROR,
});

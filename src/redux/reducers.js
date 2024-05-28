import * as actionTypes from "./actionTypes";

const initialState = {
  userName: "",
  email: "",
  set: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.userName,
      };
    case actionTypes.SET_USER_INFO_SUCCESS:
      return {
        ...state,
        set: true,
      };
    default:
      return state;
  }
};

export default reducer;

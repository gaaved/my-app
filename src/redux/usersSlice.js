import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, userName: "", email: "" }];
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: (state, action) => {
      return {
        ...state,
        userName: action.payload.userName,
        email: action.payload.email,
      };
    },
  },
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;

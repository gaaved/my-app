import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
  },
});

export const { setUserInfo } = usersSlice.actions;

export default usersSlice.reducer;

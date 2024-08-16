import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import { apiSlice } from "../helpers/apiSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

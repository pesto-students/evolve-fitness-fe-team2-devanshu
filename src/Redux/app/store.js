import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "../features/HeaderSlice";
import UserSlice from "../features/UserSlice";

export const store = configureStore({
  reducer: {
    header: HeaderSlice,
    user: UserSlice,
  },
});

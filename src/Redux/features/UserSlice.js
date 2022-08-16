import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  photoURL: null,
  Token: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      // console.log("insiedes etActiveUser", action.payload);
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.photoURL = action.payload.photoURL;
    },
    setUerLogOut: (state, action) => {
      state.userName = null;
      state.userName = null;
      state.photoURL = null;
    },
    setUerToken: (state, action) => {
      state.Token = action.payload.Token;
    },
  },
});

export const { setActiveUser, setUerLogOut, setUerToken } = UserSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserToken = (state) => state.user.Token;
export const selectUserImage = (state) => state.user.photoURL;

export default UserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  photoURL: null,
  Token: null,
  isAnonymous: null,
  isAdmin: 0,
  cityName: "bhopal",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.photoURL = action.payload.photoURL;
      state.isAnonymous = action.payload.isAnonymous;
    },
    setUerLogOut: (state, action) => {
      state.userId = null;
      state.userName = null;
      state.userName = null;
      state.photoURL = action.payload.isAnonymous;
    },
    setUerToken: (state, action) => {
      state.Token = action.payload.Token;
    },
    setAdmin: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
    },
    setCity: (state, action) => {
      state.cityName = action.payload.city;
    },
  },
});

export const { setActiveUser, setUerLogOut, setUerToken, setAdmin, setCity } = UserSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserToken = (state) => state.user.Token;
export const selectUserImage = (state) => state.user.photoURL;
export const selectUserId = (state) => state.user.userId;
export const selectUserAnonymous = (state) => state.user.isAnonymous;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectCity = (state) => state.user.cityName;

export default UserSlice.reducer;

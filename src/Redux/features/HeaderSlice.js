import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DarkMode: false,
  Model: false,
};

const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setDarkModeTask: (state, action) => {
      state.DarkMode = action.payload;
    },
    setModel: (state, action) => {
      state.Model = action.payload;
    },
  },
});

export const { setDarkModeTask, setModel } = HeaderSlice.actions;

export const DarkModeState = (state) => state.header.DarkMode;
export const ModelState = (state) => state.header.Model;

export default HeaderSlice.reducer;

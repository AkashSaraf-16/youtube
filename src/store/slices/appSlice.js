import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isSideMenuOpen: true,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    collapseSideBar: (state) => {
      state.isSideMenuOpen = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleSideMenu, collapseSideBar } = appSlice.actions;

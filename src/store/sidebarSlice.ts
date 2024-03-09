import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { open: false },
  reducers: {
    openSidebar: (state) => {
      state.open = true;
    },
    closeSidebar: (state) => {
      state.open = false;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;

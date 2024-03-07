import { createSlice } from "@reduxjs/toolkit";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState: Theme.LIGHT,
  reducers: {
    setTheme: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

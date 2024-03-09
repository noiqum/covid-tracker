import { createSlice } from "@reduxjs/toolkit";

export type displayElement = "map" | "list";

export const contentSlice = createSlice({
  name: "content",
  initialState: { displayContent: "map" } as { displayContent: displayElement },
  reducers: {
    updateContent(state, action) {
      state.displayContent = action.payload;
    },
  },
});
export const { updateContent } = contentSlice.actions;
export default contentSlice.reducer;

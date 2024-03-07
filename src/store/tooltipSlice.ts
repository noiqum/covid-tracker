import { createSlice } from "@reduxjs/toolkit";

export const tooltipSlice = createSlice({
  name: "tooltip",
  initialState: { x: 0, y: 0, display: false, name: null },
  reducers: {
    setTooltipPosition: (state, action) => {
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
      };
    },
    setTooltipDisplay: (state, action) => {
      return {
        ...state,
        display: action.payload,
      };
    },
    setTooltipName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { setTooltipPosition, setTooltipDisplay, setTooltipName } =
  tooltipSlice.actions;
export default tooltipSlice.reducer;

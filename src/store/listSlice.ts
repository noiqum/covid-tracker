import { createSlice } from "@reduxjs/toolkit";
import { TRegion } from "../API/serviceTypes";

export const listSlice = createSlice({
  name: "list",
  initialState: { list: [] } as { list: TRegion[] },
  reducers: {
    getList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { getList } = listSlice.actions;
export default listSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { TRegion } from "../API/serviceTypes";

export type TListState = { list: TRegion[]; open: boolean; loading: boolean };

export const listSlice = createSlice({
  name: "list",
  initialState: { list: [], open: false, loading: false } as TListState,
  reducers: {
    getList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { getList, setLoading, setOpen } = listSlice.actions;
export default listSlice.reducer;

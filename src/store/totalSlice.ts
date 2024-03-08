import { createSlice } from "@reduxjs/toolkit";
import { TReportTotalResponse } from "../API/serviceTypes";

type TTotalState = {
  response: TReportTotalResponse | null;
  error: string | null;
  loading: "loading" | "idle" | "failed";
};

export const totalSlice = createSlice({
  name: "total",
  initialState: { response: null, error: null, loading: "idle" } as TTotalState,
  reducers: {
    setTotal: (state, action) => {
      state.response = action.payload;
      state.loading = "idle";
    },
    setLoading: (state) => {
      state.loading = "loading";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = "failed";
    },
  },
});

export const { setTotal, setLoading, setError } = totalSlice.actions;
export default totalSlice.reducer;

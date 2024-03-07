import { createSlice } from "@reduxjs/toolkit";
import { TReportTotalResponse } from "../API/serviceTypes";

type TTotalState = {
  response: TReportTotalResponse | null;
  error: string | null;
  loading: boolean;
};

export const totalSlice = createSlice({
  name: "total",
  initialState: { response: null, error: null, loading: false } as TTotalState,
  reducers: {
    setTotal: (state, action) => {
      return {
        ...state,
        response: action.payload,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const { setTotal, setLoading, setError } = totalSlice.actions;
export default totalSlice.reducer;

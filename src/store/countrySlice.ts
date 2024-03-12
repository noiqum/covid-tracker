import { createSlice } from "@reduxjs/toolkit";
import { CountryDetail, CountryDetailSum } from "../API/serviceTypes";

type TCountrySliceState = {
  countryDetail: null | CountryDetail[];
  selectedDate: string | null;
  countryDetailSum: null | CountryDetailSum;
  loading: boolean;
  historyData: null | CountryDetailSum[];
};

const initialState: TCountrySliceState = {
  countryDetail: null,
  selectedDate: null,
  countryDetailSum: null,
  loading: false,
  historyData: null,
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountryDetail: (state, action) => {
      state.countryDetail = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setCountryDetailSum: (state, action) => {
      state.countryDetailSum = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setHistoryData: (state, action) => {
      state.historyData = action.payload;
    },
  },
});
export const {
  setCountryDetail,
  setSelectedDate,
  setCountryDetailSum,
  setLoading,
  setHistoryData,
} = countrySlice.actions;
export default countrySlice.reducer;

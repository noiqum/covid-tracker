import { call, put, takeEvery } from "redux-saga/effects";
import axios, { baseUrl } from "../API/service";
import { CountryDetail, CountryDetailSum } from "../API/serviceTypes";
import {
  setLoading,
  setCountryDetail,
  setCountryDetailSum,
} from "./countrySlice";

function arrangeCountryDetailSum(dataList: CountryDetail[]) {
  if (dataList.length === 0) return null;
  const countryDetailSum: CountryDetailSum = {
    date: dataList[0].date,
    confirmed: 0,
    confirmed_diff: 0,
    deaths: 0,
    deaths_diff: 0,
    recovered: 0,
    recovered_diff: 0,
    active: 0,
    active_diff: 0,
    fatality_rate: 0,
    last_update: dataList[0].last_update,
  };

  for (let i = 0; i < dataList.length; i++) {
    countryDetailSum.confirmed += dataList[i].confirmed;
    countryDetailSum.confirmed_diff += dataList[i].confirmed_diff;
    countryDetailSum.deaths += dataList[i].deaths;
    countryDetailSum.deaths_diff += dataList[i].deaths_diff;
    countryDetailSum.recovered += dataList[i].recovered;
    countryDetailSum.recovered_diff += dataList[i].recovered_diff;
    countryDetailSum.active += dataList[i].active;
    countryDetailSum.active_diff += dataList[i].active_diff;
    countryDetailSum.fatality_rate += dataList[i].fatality_rate;
  }
  console.log("countryDetailSum", countryDetailSum);
  return countryDetailSum;
}

async function getCountryDetail(iso: string, date: string) {
  try {
    const response: { data: CountryDetail[] } = await axios.get(
      `${baseUrl}reports`,
      {
        params: {
          iso,
          date,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* getCountryDetailSaga(action: any) {
  try {
    yield put({
      type: setLoading.type,
      payload: true,
    });
    const response: { data: CountryDetail[] } = yield call(
      getCountryDetail,
      action.payload.iso,
      action.payload.date
    );

    yield put({
      type: setCountryDetail.type,
      payload: response.data,
    });

    const countryDetailSum = arrangeCountryDetailSum(response.data);

    yield put({
      type: setCountryDetailSum.type,
      payload: countryDetailSum,
    });

    yield put({
      type: setLoading.type,
      payload: false,
    });
  } catch (error) {
    put({
      type: setLoading.type,
      payload: false,
    });
    console.log(error);
  }
}

export function* countrySaga() {
  yield takeEvery("SET_COUNTRY_DETAIL", getCountryDetailSaga);
}

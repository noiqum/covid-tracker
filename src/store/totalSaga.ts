import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getTotalReport } from "../API/service";
import { TReportTotalRequest, TReportTotalResponse } from "../API/serviceTypes";
import { setTotal, setLoading, setError } from "./totalSlice";
import axios from "../API/service";

async function getTotalNumbers(date: string) {
  try {
    const data = await axios.get(
      `https://covid-19-statistics.p.rapidapi.com/reports/total`,
      {
        params: {
          date,
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export function* gettotalSaga(action: any) {
  try {
    console.log("date", action.payload.date);
    yield put(setLoading(true));
    const response: TReportTotalResponse = yield call(
      getTotalNumbers,
      action.payload.date
    );
    yield put(setTotal(response));
  } catch (error: any) {
    yield put(setError(error.response?.data.message));
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}
export function* totalSaga() {
  yield takeEvery(setTotal.type, gettotalSaga);
}

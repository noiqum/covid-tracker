import { call, put, takeEvery } from "redux-saga/effects";
import { TReportTotalResponse } from "../API/serviceTypes";
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
  console.log("date", action.payload.date);

  try {
    console.log("date", action.payload.date);
    const response: TReportTotalResponse = yield call(
      getTotalNumbers,
      action.payload.date
    );
    yield put({
      type: setTotal.type,
      payload: response,
    });
  } catch (error: any) {
    yield put(setError(error.response?.data.message));
    console.log(error);
  }
}
export function* totalSaga() {
  yield takeEvery("SET_TOTAL", gettotalSaga);
}

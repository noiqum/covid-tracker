import { call, put, takeEvery } from "redux-saga/effects";
import { TReportTotalResponse } from "../API/serviceTypes";
import { setTotal, setError } from "./totalSlice";
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
    const response: { data: { data: TReportTotalResponse } } = yield call(
      getTotalNumbers,
      action.payload.date
    );
    yield put({
      type: setTotal.type,
      payload: response.data.data,
    });
  } catch (error: any) {
    yield put(setError(error.response?.data.message));
    console.log(error);
  }
}
export function* totalSaga() {
  yield takeEvery("SET_TOTAL", gettotalSaga);
}

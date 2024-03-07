import { call, put, takeEvery } from "redux-saga/effects";
import { getTotalReport } from "../API/service";
import { TReportTotalRequest, TReportTotalResponse } from "../API/serviceTypes";
import { setTotal, setLoading, setError } from "./totalSlice";
import { AxiosError } from "axios";

export function* totalSaga(action: ReturnType<typeof setTotal>) {
  try {
    yield put(setLoading(true));
    const response: TReportTotalResponse = yield call(
      getTotalReport,
      action.payload as TReportTotalRequest
    );
    yield put(setTotal(response));
  } catch (error: AxiosError | any) {
    yield put(setError(error.response?.data.message));
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchTotalSaga() {
  yield takeEvery(setTotal.type, totalSaga);
}

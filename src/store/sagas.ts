import { takeLatest } from "redux-saga/effects";
import { totalSaga } from "./totalSaga";
import { setTotal } from "./totalSlice";

export function* rootSaga() {
  yield takeLatest(setTotal.type, totalSaga);
}

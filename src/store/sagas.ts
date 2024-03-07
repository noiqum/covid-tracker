import { all } from "redux-saga/effects";
import { watchTotalSaga } from "./totalSaga";

export function* rootSaga() {
  yield all([watchTotalSaga()]);
}

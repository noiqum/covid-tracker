import { all } from "redux-saga/effects";
import { totalSaga } from "./totalSaga";

export function* rootSaga() {
  yield all([totalSaga()]);
}

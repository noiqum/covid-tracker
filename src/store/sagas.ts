import { all } from "redux-saga/effects";
import { totalSaga } from "./totalSaga";
import { listSaga } from "./listSaga";

export function* rootSaga() {
  yield all([totalSaga(), listSaga()]);
}

import { all } from "redux-saga/effects";
import { totalSaga } from "./totalSaga";
import { listSaga } from "./listSaga";
import { countrySaga } from "./CountrySaga";

export function* rootSaga() {
  yield all([totalSaga(), listSaga(), countrySaga()]);
}

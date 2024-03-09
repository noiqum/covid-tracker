import { call, takeEvery } from "redux-saga/effects";
import axios from "../API/service";
import { baseUrl } from "../API/service";
import { TRegion } from "../API/serviceTypes";

async function getList() {
  try {
    const response = await axios.get(`${baseUrl}regions`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* getListSaga() {
  try {
    const data: { data: { data: TRegion[] } } = yield call(getList);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export function* listSaga() {
  yield takeEvery("SET_LIST", getListSaga);
}

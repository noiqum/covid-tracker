import { call, put, takeEvery } from "redux-saga/effects";
import axios from "../API/service";
import { baseUrl } from "../API/service";
import { TRegion } from "../API/serviceTypes";
import { setLoading, getList } from "./listSlice";

async function getRegionsList() {
  try {
    const response = await axios.get(`${baseUrl}regions`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* getListSaga() {
  try {
    yield put({
      type: setLoading.type,
      payload: true,
    });
    const response: { data: TRegion[] } = yield call(getRegionsList);
    console.log("list res", response);
    const sortedRegions = response.data.sort((a: TRegion, b: TRegion) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(sortedRegions);
    yield put({
      type: getList.type,
      payload: sortedRegions,
    });
    yield put({
      type: setLoading.type,
      payload: false,
    });
  } catch (error) {
    put({
      type: setLoading.type,
      payload: false,
    });
    console.log(error);
  }
}

export function* listSaga() {
  yield takeEvery("SET_LIST", getListSaga);
}

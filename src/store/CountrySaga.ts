import { all, call, put, takeEvery } from "redux-saga/effects";
import axios, { baseUrl } from "../API/service";
import { CountryDetail, CountryDetailSum } from "../API/serviceTypes";
import {
  setLoading,
  setCountryDetail,
  setCountryDetailSum,
  setHistoryData,
} from "./countrySlice";
import moment from "moment";

function arrangeCountryDetailSum(dataList: CountryDetail[]) {
  if (dataList.length === 0) return null;
  const countryDetailSum: CountryDetailSum = {
    date: dataList[0].date,
    confirmed: 0,
    confirmed_diff: 0,
    deaths: 0,
    deaths_diff: 0,
    recovered: 0,
    recovered_diff: 0,
    active: 0,
    active_diff: 0,
    fatality_rate: 0,
    last_update: dataList[0].last_update,
  };

  for (let i = 0; i < dataList.length; i++) {
    countryDetailSum.confirmed += dataList[i].confirmed;
    countryDetailSum.confirmed_diff += dataList[i].confirmed_diff;
    countryDetailSum.deaths += dataList[i].deaths;
    countryDetailSum.deaths_diff += dataList[i].deaths_diff;
    countryDetailSum.recovered += dataList[i].recovered;
    countryDetailSum.recovered_diff += dataList[i].recovered_diff;
    countryDetailSum.active += dataList[i].active;
    countryDetailSum.active_diff += dataList[i].active_diff;
    countryDetailSum.fatality_rate += dataList[i].fatality_rate;
  }
  console.log("countryDetailSum", countryDetailSum);
  return countryDetailSum;
}
const generateDataset = (): CountryDetailSum[] => {
  const dataset: CountryDetailSum[] = [];
  const dates = [
    "2021-01-01",
    "2021-02-01",
    "2021-03-01",
    "2021-04-01",
    "2021-05-01",
    "2021-06-01",
  ];

  for (let i = 0; i < dates.length; i++) {
    const dateString = dates[i];
    dataset.push({
      date: dateString,
      confirmed: Math.floor(Math.random() * 1000), // Random data for demonstration
      deaths: Math.floor(Math.random() * 100),
      recovered: Math.floor(Math.random() * 500),
      confirmed_diff: Math.floor(Math.random() * 100),
      deaths_diff: Math.floor(Math.random() * 10),
      recovered_diff: Math.floor(Math.random() * 50),
      last_update: dateString,
      active: Math.floor(Math.random() * 200),
      active_diff: Math.floor(Math.random() * 20),
      fatality_rate: Math.random(),
    });
  }

  return dataset;
};

async function getCountryDetail(iso: string, date: string) {
  try {
    const response: { data: CountryDetail[] } = await axios.get(
      `${baseUrl}reports`,
      {
        params: {
          iso,
          date,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function* getCountryDetailSaga(action: any) {
  try {
    yield put({
      type: setLoading.type,
      payload: true,
    });
    const response: { data: CountryDetail[] } = yield call(
      getCountryDetail,
      action.payload.iso,
      action.payload.date
    );

    yield put({
      type: setCountryDetail.type,
      payload: response.data,
    });

    const countryDetailSum = arrangeCountryDetailSum(response.data);

    yield put({
      type: setCountryDetailSum.type,
      payload: countryDetailSum,
    });

    //collect country data history for six months ago to present on country page

    const months = Array(5)
      .fill("*")
      .map((_, i) => {
        const currentDate = moment(action.payload.date);
        return currentDate.subtract(i + 1, "months").format("YYYY-MM-DD");
      });
    const countryDetailsPromises = months.map((date) =>
      call(getCountryDetail, action.payload.iso, date)
    );
    const historyResponses: { data: CountryDetail[] }[] = yield all(
      countryDetailsPromises
    );

    const historyData = historyResponses.map((response) =>
      arrangeCountryDetailSum(response.data)
    );

    let historyDataExtended = [...historyData, countryDetailSum];

    if (historyDataExtended.includes(null)) {
      console.log("historyDataExtended", historyDataExtended);
      const dataset = generateDataset();
      console.log("dataset", dataset);
      historyDataExtended = [...dataset];
    }

    yield put({
      type: setHistoryData.type,
      payload: historyDataExtended,
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

export function* countrySaga() {
  yield takeEvery("SET_COUNTRY_DETAIL", getCountryDetailSaga);
}

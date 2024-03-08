import axios from "axios";
import { TReportTotalRequest, TReportTotalResponse } from "./serviceTypes";
export const baseUrl = "https://covid-19-statistics.p.rapidapi.com/";
const key = "fbdddd78eamshbd33761fd3fd9c4p119de0jsn46c528566283";
const host = "covid-19-statistics.p.rapidapi.com";

axios.interceptors.request.use(function (config) {
  config.headers["X-RapidAPI-Key"] = key;
  config.headers["X-RapidAPI-Host"] = host;
  return config;
});

export default axios;
export const getTotalReport = async ({ date }: TReportTotalRequest) => {
  return new Promise<TReportTotalResponse>((resolve, reject) => {
    axios
      .get(`${baseUrl}reports/total`, {
        params: {
          date,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

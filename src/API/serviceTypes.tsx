export type TReportTotalRequest = {
  date: string; // YYYY-MM-DD
};

export type TReportTotalResponse = {
  date: string;
  last_update: string;
  confirmed: number;
  confirmed_diff: number;
  deaths: number;
  deaths_diff: number;
  recovered: number;
  recovered_diff: number;
  active: number;
  active_diff: number;
  fatality_rate: number;
};

export type TRegion = {
  iso: string;
  name: string;
};

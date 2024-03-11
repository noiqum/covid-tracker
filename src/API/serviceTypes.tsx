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
export type CountryDetail = {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  confirmed_diff: number;
  deaths_diff: number;
  recovered_diff: number;
  last_update: string;
  active: number;
  active_diff: number;
  fatality_rate: number;
  region: regionResponse[];
};
export type regionResponse = {
  iso: string;
  name: string;
  province: string;
  lat: string;
  long: string;
  cities: CityDetail[];
};

export type CityDetail = {
  name: string;
  date: string;
  fips: number;
  lat: string;
  long: string;
  confirmed: number;
  deaths: number;
  confirmed_diff: number;
  deaths_diff: number;
  last_update: string;
};

export type CountryResponse = {
  data: CountryDetail[];
};

export type CountryDetailSum = {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  confirmed_diff: number;
  deaths_diff: number;
  recovered_diff: number;
  last_update: string;
  active: number;
  active_diff: number;
  fatality_rate: number;
};

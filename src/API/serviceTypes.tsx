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
  region: regionResponse;
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
export type location = {
  long: number;
  countryOrRegion: string;
  provinceOrState: string | null;
  county: string | null;
  isoCode: string;
  lat: number;
};
export type Article = {
  path: string;
  title: string;
  excerpt: string;
  sourceUrl: string | null;
  webUrl: string;
  originalUrl: string;
  featuredContent: string | null;
  highlight: string | null;
  heat: number;
  tags: string[];
  images:
    | {
        url: string;
        width: number;
        height: number;
        title: string | null;
        attribution: string | null;
        isCached: boolean;
      }[]
    | null;
  content: string;
  type: string;
  ampWebUrl: string;
  cdnAmpWebUrl: string;
  publishedDateTime: string;
  updatedDateTime: string | null;
  provider: {
    name: string;
    domain: string;
    images: null;
    publishers: null;
    authors: null;
  };
  locale: string;
  categories: string[];
  topics: string[];
};
export type newsResponse = {
  location: location;
  updatedDateTime: string;
  news: Article[];
};

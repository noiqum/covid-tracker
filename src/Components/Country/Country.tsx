import { TCountry } from "../../Data/Data";
import "./Country.scss";

export const Country = ({ name, path }: TCountry) => {
  return <path className="country" d={path} name={name}></path>;
};

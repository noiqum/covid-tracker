import { TCountry } from "../../Data/Data";
import "./Country.scss";
import { Link } from "react-router-dom";

export const Country = ({ name, path }: TCountry) => {
  return (
    <Link to={`/country/${name.toLowerCase().trim()}`}>
      <path className="country" d={path} name={name}></path>
    </Link>
  );
};

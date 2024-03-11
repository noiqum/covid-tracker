import { useCallback } from "react";
import { TCountry } from "../../Data/Data";
import "./Country.scss";
import { Link } from "react-router-dom";

export const Country = ({ name, path }: TCountry) => {
  const linkUrlHandler = useCallback((name: string) => {
    if (name === "United States") {
      return `/country/us`;
    }
    return `/country/${name.toLowerCase().replace(/\s/g, "").trim()}`;
  }, []);
  return (
    <Link to={linkUrlHandler(`${name}`)}>
      <path className="country" d={path} name={name}></path>
    </Link>
  );
};

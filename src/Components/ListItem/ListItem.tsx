import { Link } from "react-router-dom";
import { TRegion } from "../../API/serviceTypes";
import "./ListItem.scss";

export const ListItem = ({ country }: { country: TRegion }) => {
  return (
    <Link
      to={`/country/${country.name.toLowerCase().replace(/\s/g, "").trim()}`}
      className="ListItem"
    >
      {country.name}
    </Link>
  );
};

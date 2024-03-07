import { countryList } from "../../Data/Data";
import { Country } from "../Country/Country";

export const Map = () => {
  return (
    <div className="map">
      <svg
        baseProfile="tiny"
        fill="#ececec"
        height="auto"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".2"
        version="1.2"
        viewBox="0 0 2000 857"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {countryList.map((country, index) => {
          return (
            <Country
              key={country.name + index}
              name={country.name}
              path={country.path}
            />
          );
        })}
      </svg>
    </div>
  );
};

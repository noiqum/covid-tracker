import { useCallback, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { TRegion } from "../../API/serviceTypes";
import "./GridList.scss";
import { ListItem } from "../ListItem/ListItem";

export const GridList = () => {
  const { list, loading } = useAppSelector((state) => state.list);

  const groupCountriesByFirstLetter = useCallback((countries: TRegion[]) => {
    const groupedCountries: { [key: string]: TRegion[] } = {};

    countries.forEach((country) => {
      const firstLetter = country.name.charAt(0).toUpperCase();

      if (!groupedCountries[firstLetter]) {
        groupedCountries[firstLetter] = [country];
      } else {
        groupedCountries[firstLetter].push(country);
      }
    });

    return groupedCountries;
  }, []);
  const groups = useMemo(() => {
    return groupCountriesByFirstLetter(list);
  }, [list, groupCountriesByFirstLetter]);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="grid-list">
      {Object.keys(groups).map((letter, index) => {
        return (
          <div
            style={{ animationDelay: `${index * 0.15}s` }}
            className="grid-list__group"
            key={letter}
          >
            <h3>{letter}</h3>
            <section>
              {groups[letter].map((country) => {
                return <ListItem country={country} key={country.name} />;
              })}
            </section>
          </div>
        );
      })}
    </div>
  );
};

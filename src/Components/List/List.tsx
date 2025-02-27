import { useEffect, useState } from "react";
import { TRegion } from "../../API/serviceTypes";
import "./List.scss";
import { ListItem } from "../ListItem/ListItem";

interface ListProps {
  regions: TRegion[];
  open: boolean;
  searchParam: string;
}

export const List = ({ regions, open, searchParam }: ListProps) => {
  const [filteredRegions, setFilteredRegions] = useState(regions);

  useEffect(() => {
    if (searchParam.length >= 2) {
      const filtered = regions.filter((region) => {
        return region.name.toLowerCase().includes(searchParam.toLowerCase());
      });
      setFilteredRegions(filtered);
    }
    if (searchParam.length === 0) {
      setFilteredRegions(regions);
    }
  }, [searchParam, regions]);
  return (
    <ul id="searchlist" className={`List ${open ? "List--open" : ""}`}>
      {filteredRegions.map((region) => {
        return <ListItem key={region.name} country={region} />;
      })}
    </ul>
  );
};

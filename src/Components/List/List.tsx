import { TRegion } from "../../API/serviceTypes";
import "./List.scss";

interface ListProps {
  regions: TRegion[];
  open: boolean;
  searchParam: string;
}

export const List = ({ regions, open }: ListProps) => {
  return (
    <ul id="searchlist" className={`List ${open ? "List--open" : ""}`}>
      {regions.map((region) => {
        return (
          <li key={region.name} className="List__item">
            {region.name}
          </li>
        );
      })}
    </ul>
  );
};

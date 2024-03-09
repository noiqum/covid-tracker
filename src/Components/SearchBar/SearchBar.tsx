import "./SearchBar.scss";
import { SearchIcon } from "./SearchIcon";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <SearchIcon />
      <input
        className="SearchBar__input"
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

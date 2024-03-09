import { ContentToogle } from "../ContentToogle/ContentToogle";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Navigation.scss";

interface NavigationProps {
  type: "main" | "side";
}

export const Navigation = ({ type }: NavigationProps) => {
  return (
    <nav
      className={
        type === "main"
          ? "navigation navigation--main"
          : "navigation navigation--side"
      }
    >
      <div className="navigation__icon">
        {type === "main" && <ContentToogle />}
        {type === "side" && <button>Update</button>}
      </div>
      <div className="navigation__bar">
        <SearchBar />
      </div>
    </nav>
  );
};

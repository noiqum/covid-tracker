import { useNavigate } from "react-router-dom";
import { ContentToogle } from "../ContentToogle/ContentToogle";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomeIcon } from "./HomeIcon";
import "./Navigation.scss";

interface NavigationProps {
  type: "main" | "side";
}

export const Navigation = ({ type }: NavigationProps) => {
  const navigate = useNavigate();
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
        {type === "side" && (
          <span
            onClick={() => navigate("/")}
            className="navigation__icon__home"
          >
            <HomeIcon></HomeIcon>
          </span>
        )}
      </div>
      <div className="navigation__bar">
        <SearchBar />
      </div>
    </nav>
  );
};

import { useNavigate } from "react-router-dom";
import { ContentToogle } from "../ContentToogle/ContentToogle";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomeIcon } from "./HomeIcon";
import "./Navigation.scss";
import { useAppSelector } from "../../store/hooks";

interface NavigationProps {
  type: "main" | "side";
}

export const Navigation = ({ type }: NavigationProps) => {
  const navigate = useNavigate();
  const selectedCountryName = useAppSelector(
    (state) => state.country.countryDetail?.at(0)?.region.name
  );
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
            role="link"
            data-testid="homeIcon"
          >
            <HomeIcon></HomeIcon>
          </span>
        )}
      </div>
      {type === "side" && selectedCountryName && (
        <h3 className="navigation__title">{selectedCountryName}</h3>
      )}
      <div className="navigation__bar">
        <SearchBar />
      </div>
    </nav>
  );
};

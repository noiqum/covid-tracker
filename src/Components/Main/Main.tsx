import { useAppSelector } from "../../store/hooks";
import { Tooltip } from "../ToolTip/Tooltip";
import { Map } from "../Map/Map";
import "./Main.scss";
import { Navigation } from "../Navigation/Navigation";
import { GridList } from "../GridList/GridList";

export type displayElement = "map" | "list";
export const Main = () => {
  const { name, x, y, display } = useAppSelector((state) => state.tooltip);
  const { displayContent } = useAppSelector((state) => state.content);
  return (
    <div className="main">
      <Navigation type="main" />
      {displayContent === "map" && (
        <>
          <Tooltip name={name} x={x} y={y} display={display} />
          <Map />
        </>
      )}
      {displayContent === "list" && <GridList />}
    </div>
  );
};

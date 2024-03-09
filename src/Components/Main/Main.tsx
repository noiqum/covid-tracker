import { useAppSelector } from "../../store/hooks";
import { Tooltip } from "../ToolTip/Tooltip";
import { Map } from "../Map/Map";
import "./Main.scss";

export type displayElement = "map" | "list";
export const Main = () => {
  const { name, x, y, display } = useAppSelector((state) => state.tooltip);
  const { displayContent } = useAppSelector((state) => state.content);
  return (
    <div className="main">
      {displayContent === "map" && (
        <>
          <Tooltip name={name} x={x} y={y} display={display} />
          <Map />
        </>
      )}
    </div>
  );
};

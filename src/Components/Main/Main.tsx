import { useAppSelector } from "../../store/hooks";
import { Tooltip } from "../ToolTip/Tooltip";
import { Map } from "../Map/Map";
import "./Main.scss";
export const Main = () => {
  const { name, x, y, display } = useAppSelector((state) => state.tooltip);
  return (
    <div className="main">
      <Tooltip name={name} x={x} y={y} display={display} />
      <Map />
    </div>
  );
};

import React from "react";
import { Map } from "./Components/Map/Map";
import { Tooltip } from "./Components/ToolTip/Tooltip";
import { useAppSelector } from "./store/hooks";

/* import SideBar from "./Components/SideBar/SideBar"; */

function App() {
  const { name, x, y, display } = useAppSelector((state) => state.tooltip);
  return (
    <div className="App">
      {/* <SideBar /> */}
      <Tooltip name={name} x={x} y={y} display={display} />

      <Map />
    </div>
  );
}

export default App;

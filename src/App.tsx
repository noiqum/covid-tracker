import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import { Main } from "./Components/Main/Main";
import "./App.scss";
function App() {
  return (
    <div data-testid="app" className="App">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;

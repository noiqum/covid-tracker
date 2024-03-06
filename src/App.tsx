import React, { useEffect } from "react";
import Logo from "./Components/Logo/Logo";
import { getTotalReport } from "./API/service";

function App() {
  useEffect(() => {
    getTotalReport({ date: "2020-03-01" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Logo></Logo>
    </div>
  );
}

export default App;

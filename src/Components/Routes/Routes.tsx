import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { CountryPage } from "../../Pages/CountryPage/CountryPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "country/:country",
    element: <CountryPage />,
  },
  {
    path: "/not-found",
    element: <div>404</div>,
  },
]);

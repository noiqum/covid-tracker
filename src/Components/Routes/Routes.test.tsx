import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { setupStore } from "../../store";
import App from "../../App";
import { CountryPage } from "../../Pages/CountryPage/CountryPage";
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage";
import { TListState } from "../../store/listSlice";

describe("Routes", () => {
  test("should render root", () => {
    render(
      <Provider store={setupStore({})}>
        <MemoryRouter initialEntries={["/"]}>
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });
  test("should render country", () => {
    render(
      <Provider store={setupStore({})}>
        <MemoryRouter initialEntries={["/country/turkey"]}>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/country/:country" element={<CountryPage />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const country = screen.getByText("turkey");
    expect(country).toBeInTheDocument();
  });
  test("should render not found for wrong country path", () => {
    render(
      <Provider
        store={setupStore({
          list: {
            list: [
              {
                name: "turkey",
                iso: "tur",
              },
              {
                name: "united states",
                iso: "us",
              },
            ],
          } as TListState,
        })}
      >
        <MemoryRouter initialEntries={["/country/fake"]}>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/country/:country" element={<CountryPage />}></Route>
            <Route path="/not-found" element={<NotFoundPage />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });
});

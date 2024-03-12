import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { GridList } from "./GridList";
import { Provider } from "react-redux";

import { setupStore } from "../../store";
import { TListState } from "../../store/listSlice";
import { TRegion } from "../../API/serviceTypes";
import { MemoryRouter } from "react-router-dom";

describe("GridList", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<GridList />);
    expect(container).toBeInTheDocument();
  });
  test("should render loading", () => {
    const mockCountries: TRegion[] = [
      {
        name: "turkey",
        iso: "tur",
      },
      {
        name: "united states",
        iso: "us",
      },
    ];
    const store = setupStore({
      list: {
        list: mockCountries,
        loading: true,
      } as TListState,
    });
    render(
      <Provider store={store}>
        <GridList />
      </Provider>
    );
    const loading = screen.getByText("Loading");
    expect(loading).toBeInTheDocument();
  });
  test("should render countries in grid list group", () => {
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
            loading: false,
            open: true,
          } as TListState,
        })}
      >
        <MemoryRouter>
          <GridList />
        </MemoryRouter>
      </Provider>
    );
    const countryLinks = screen.getAllByRole("link");
    expect(countryLinks).toHaveLength(2);
    expect(countryLinks[0]).toHaveTextContent("turkey");
    expect(countryLinks[1]).toHaveTextContent("united states");
  });
});

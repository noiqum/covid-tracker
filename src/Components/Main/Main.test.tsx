import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { Main } from "./Main";
import { setupStore } from "../../store";
import { displayElement } from "../../store/contentSlice";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("Main", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<Main />);
    expect(container).toBeInTheDocument();
  });
  test("should render map", () => {
    const store = setupStore({
      content: {
        displayContent: "map",
      } as { displayContent: displayElement },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    );
    const map = screen.getByTestId("map");
    expect(map).toBeInTheDocument();
  });
});

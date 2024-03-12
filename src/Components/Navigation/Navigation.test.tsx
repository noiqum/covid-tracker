import { renderWithProviders } from "../../test-utils";
import { Navigation } from "./Navigation";
import { screen } from "@testing-library/react";

describe("Navigation", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<Navigation type="main" />);
    expect(container).toBeInTheDocument();
  });
  test("should render toogle in main navigation", () => {
    renderWithProviders(<Navigation type="main" />);
    const radioInputs = screen.getAllByRole("radio");
    expect(radioInputs).toHaveLength(2);
  });
  test("should render home icon and not toggle in side navigation", () => {
    renderWithProviders(<Navigation type="side" />);
    const radioInputs = screen.queryAllByRole("radio");
    expect(radioInputs).toHaveLength(0);
    const homeIcon = screen.getByTestId("homeIcon");
    expect(homeIcon).toBeInTheDocument();
  });
});

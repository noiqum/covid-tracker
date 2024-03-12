import { renderWithProviders } from "../../test-utils";
import { Country } from "./Country";
import { screen } from "@testing-library/react";

describe("Country", () => {
  it("should render", () => {
    const { container } = renderWithProviders(
      <Country name="test-name" path="test-path" />
    );
    expect(container).toBeInTheDocument();
  });
  test("should navigate to correct path", () => {
    renderWithProviders(<Country name="test-name" path="test-path" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/country/test-name");
  });
});

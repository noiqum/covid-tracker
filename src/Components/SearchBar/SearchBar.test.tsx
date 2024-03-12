import { renderWithProviders } from "../../test-utils";
import { SearchBar } from "./SearchBar";
import { screen, fireEvent } from "@testing-library/react";

describe("SearchBar", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<SearchBar />);
    expect(container).toBeInTheDocument();
  });
  test("should render value correctly", () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText("Search for a country");
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });
  test("should open dropdown if value is long than two characters", () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText("Search for a country");
    fireEvent.change(input, { target: { value: "test" } });
    const dropdown = screen.getByRole("list");
    expect(dropdown).toHaveClass("List--open");
  });
});

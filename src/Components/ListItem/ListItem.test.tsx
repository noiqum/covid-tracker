import { renderWithProviders } from "../../test-utils";
import { ListItem } from "./ListItem";
import { screen } from "@testing-library/react";

describe("ListItem", () => {
  it("should render", () => {
    const { container } = renderWithProviders(
      <ListItem country={{ name: "test", iso: "test" }} />
    );
    expect(container).toBeInTheDocument();
  });
  test("should render country name", () => {
    renderWithProviders(<ListItem country={{ name: "test", iso: "test" }} />);
    const country = screen.getByText("test");
    expect(country).toBeInTheDocument();
  });
  test("should navigate to correct path", () => {
    renderWithProviders(<ListItem country={{ name: "test", iso: "test" }} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/country/test");
  });
});

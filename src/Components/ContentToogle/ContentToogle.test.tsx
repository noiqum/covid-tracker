import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { ContentToogle } from "./ContentToogle";

describe("ContentToogle", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<ContentToogle />);
    expect(container).toBeInTheDocument();
  });
  test("initial state should be map", () => {
    renderWithProviders(<ContentToogle />);
    const mapLabel = screen.getByLabelText("Map");
    const listLabel = screen.getByLabelText("List");
    expect(mapLabel).toBeChecked();
    expect(listLabel).not.toBeChecked();
  });
  test("should switch to list", () => {
    renderWithProviders(<ContentToogle />);
    const listLabel = screen.getByLabelText("List");
    listLabel.click();
    expect(listLabel).toBeChecked();
    expect(screen.getByLabelText("Map")).not.toBeChecked();
  });
  test("should switch to map", () => {
    renderWithProviders(<ContentToogle />);
    const mapLabel = screen.getByLabelText("Map");
    const listLabel = screen.getByLabelText("List");
    listLabel.click();
    mapLabel.click();
    expect(mapLabel).toBeChecked();
    expect(screen.getByLabelText("List")).not.toBeChecked();
  });
});

import { Map } from "./Map";
import { renderWithProviders } from "../../test-utils";

describe("Map", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<Map />);
    expect(container).toBeInTheDocument();
  });
});

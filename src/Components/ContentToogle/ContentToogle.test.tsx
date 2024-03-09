import { renderWithProviders } from "../../test-utils";
import { ContentToogle } from "./ContentToogle";

describe("ContentToogle", () => {
  it("should render", () => {
    const { container } = renderWithProviders(<ContentToogle />);
    expect(container).toBeInTheDocument();
  });
});

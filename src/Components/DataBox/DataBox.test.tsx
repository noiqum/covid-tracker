import { renderWithProviders } from "../../test-utils";
import { DataBox } from "./DataBox";
import { screen } from "@testing-library/react";

describe("DataBox", () => {
  it("should render", () => {
    const { container } = renderWithProviders(
      <DataBox title="" data="" diff={0} loading={false} />
    );
    expect(container).toBeInTheDocument();
  });
  test("should render title", () => {
    renderWithProviders(
      <DataBox title="test-title" data="" diff={0} loading={false} />
    );
    const title = screen.getByText("test-title");
    expect(title).toBeInTheDocument();
  });
  test("should render data", () => {
    renderWithProviders(
      <DataBox title="" data="test-data" diff={0} loading={false} />
    );
    const data = screen.getByText("test-data");
    expect(data).toBeInTheDocument();
  });
  test("should render diff", () => {
    renderWithProviders(<DataBox title="" data="" diff={1} loading={false} />);
    const diff = screen.getByText("1");
    expect(diff).toBeInTheDocument();
  });
  test("should render up icon", () => {
    renderWithProviders(<DataBox title="" data="" diff={1} loading={false} />);
    const upIcon = screen.getByTestId("up-icon");
    expect(upIcon).toBeInTheDocument();
  });
  test("should render down icon", () => {
    renderWithProviders(<DataBox title="" data="" diff={-1} loading={false} />);
    const downIcon = screen.getByTestId("down-icon");
    expect(downIcon).toBeInTheDocument();
  });
  test("should not render any icon for zero diff", () => {
    renderWithProviders(<DataBox title="" data="" diff={0} loading={false} />);
    const upIcon = screen.queryByTestId("up-icon");
    const downIcon = screen.queryByTestId("down-icon");
    expect(upIcon).not.toBeInTheDocument();
    expect(downIcon).not.toBeInTheDocument();
  });
  test("should render loading state", () => {
    const { container } = renderWithProviders(
      <DataBox title="" data="" diff={0} loading={true} />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass("data-box--loading");
  });
});

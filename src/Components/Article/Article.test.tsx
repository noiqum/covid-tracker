import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import { Article } from "./Article";
import moment from "moment";

describe("Article", () => {
  it("should render", () => {
    const { container } = renderWithProviders(
      <Article title="" description="" path="" date="" image="" source="" />
    );
    expect(container).toBeInTheDocument();
  });
  test("should render image", () => {
    renderWithProviders(
      <Article
        title=""
        description=""
        path=""
        date=""
        image="test-image"
        source=""
      />
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test-image");
  });
  test("should render title", () => {
    renderWithProviders(
      <Article
        title="test-title"
        description=""
        path=""
        date=""
        image=""
        source=""
      />
    );
    const title = screen.getByText("test-title");
    expect(title).toBeInTheDocument();
  });
  test("should render description", () => {
    renderWithProviders(
      <Article
        title=""
        description="test-description"
        path=""
        date=""
        image=""
        source=""
      />
    );
    const description = screen.getByText("test-description");
    expect(description).toBeInTheDocument();
  });
  test("should render source", () => {
    renderWithProviders(
      <Article title="" description="" path="" date="" image="" source="test" />
    );
    const source = screen.getByText("test");
    expect(source).toBeInTheDocument();
  });
  test("should render date", () => {
    renderWithProviders(
      <Article
        title=""
        description=""
        path=""
        date="2020.01.01"
        image=""
        source=""
      />
    );
    const dateFormat = moment("2020.01.01").format("DD MMM YYYY");
    const date = screen.getByText(dateFormat);
    expect(date).toBeInTheDocument();
  });
  test("should render link", () => {
    renderWithProviders(
      <Article
        title=""
        description=""
        path="test-path"
        date=""
        image=""
        source=""
      />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "test-path");
  });
  test("should open in new tab", () => {
    renderWithProviders(
      <Article
        title=""
        description=""
        path="test-path"
        date=""
        image=""
        source=""
      />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });
});

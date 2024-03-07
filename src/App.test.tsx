import React from "react";

import App from "./App";
import { renderWithProviders } from "./test-utils";

test("render App", () => {
  const { container } = renderWithProviders(<App />);

  expect(container).toBeInTheDocument();
});

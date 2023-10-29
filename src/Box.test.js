import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

test("should render", () => {
  render(<Box />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

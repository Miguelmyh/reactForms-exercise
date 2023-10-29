import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("should render", () => {
  render(<NewBoxForm />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("shoul do some", () => {
  const { queryByPlaceholderText, queryByText, getByTestId } = render(
    <NewBoxForm />
  );
  const width = queryByPlaceholderText("Type the width for a box");
  const height = queryByPlaceholderText("Type the height for a box");
  const backgroundColor = queryByPlaceholderText("Type the color for a box");
  const btn = queryByText("Add Box");
  expect(height).toBeInTheDocument();
  expect(backgroundColor).toBeInTheDocument();
});

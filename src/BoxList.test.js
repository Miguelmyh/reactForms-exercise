import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("should render", () => {
  render(<BoxList />);
});

test("should match snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("should add a box", () => {
  const { queryByPlaceholderText, queryByText } = render(<BoxList />);
  expect(queryByText("X")).not.toBeInTheDocument();
  const width = queryByPlaceholderText("Type the width for a box");
  const height = queryByPlaceholderText("Type the height for a box");
  const backgroundColor = queryByPlaceholderText("Type the color for a box");
  const btn = queryByText("Add Box");
  fireEvent.change(width, { target: { value: "20" } });
  fireEvent.change(height, { target: { value: "20" } });
  fireEvent.change(backgroundColor, { target: { value: "red" } });
  fireEvent.click(btn);
  expect(queryByText("X")).toBeInTheDocument();
});

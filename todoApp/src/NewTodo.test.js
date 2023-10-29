import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("should render", () => {
  render(<NewTodoForm />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("should have form fields", () => {
  const { queryByPlaceholderText } = render(<NewTodoForm />);
  const input = queryByPlaceholderText("TodoItem");
  expect(input).toBeInTheDocument();
});

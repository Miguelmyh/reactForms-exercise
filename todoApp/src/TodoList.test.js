import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("should render", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("should add a task", () => {
  const { queryByPlaceholderText, queryByText } = render(<TodoList />);
  const task = queryByPlaceholderText("TodoItem");
  const btn = queryByText("Submit");
  expect(queryByText("clean the kitchen")).not.toBeInTheDocument();
  fireEvent.change(task, { target: { value: "clean the kitchen" } });
  fireEvent.click(btn);
  expect(queryByText("clean the kitchen")).toBeInTheDocument();
});

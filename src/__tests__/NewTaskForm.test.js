import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../components/data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  const detailsInput = screen.getByLabelText(/Details/);
  const categoryInput = screen.getByLabelText(/Category/);
  const addButton = screen.getByRole("button", { name: "Add Task" });

  fireEvent.change(detailsInput, {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(categoryInput, {
    target: { value: "Code" },
  });

  fireEvent.click(addButton);

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

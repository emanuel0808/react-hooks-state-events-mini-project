import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../components/data";

test("displays all items when initially rendered", () => {
  render(<TaskList tasks={TASKS} />);
  const taskItems = screen.getAllByTestId("task-item");
  expect(taskItems).toHaveLength(TASKS.length);
});

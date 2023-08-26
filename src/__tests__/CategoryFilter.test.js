import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importing matchers from jest-dom
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../components/data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={() => {}} />);
  
  const selectElement = screen.getByTestId("category-filter");
  
  for (const category of CATEGORIES) {
    const optionElement = screen.getByText(category);
    expect(optionElement).toBeInTheDocument(); // Use toBeInTheDocument directly
  }
});


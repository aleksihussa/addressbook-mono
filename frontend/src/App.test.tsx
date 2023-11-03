import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Application's basic components", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it("renders top bar", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const el = screen.getByText(/Address book/i);
    expect(el).toBeInTheDocument();
  });

  it("menu is rendered and opens when clicked", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const topBar = screen.getByTestId("top_bar");
    const button = topBar.querySelector("button");
    fireEvent.click(button as Element);
    const element = screen.getByText(/Close/i);
    expect(element).toBeInTheDocument();
  });
});

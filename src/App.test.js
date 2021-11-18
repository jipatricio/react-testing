import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import App from "./App";

test("Render component", () => {
  const component = render(<App />);
  //console.log(prettyDOM(component.container));
  expect(component.getByText("Haciendo Pruebas")).toBeInTheDocument();
});

test("When click first button Expect sum ", () => {
  const onClick = jest.fn();
  const component = render(<App />);
  const button = component.getByText("+").toBeInstanceOf(Node);
  console.log("BUTTON", button);
});

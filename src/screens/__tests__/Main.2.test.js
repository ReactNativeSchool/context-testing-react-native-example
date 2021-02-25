import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Main } from "../Main";

it("render default text", () => {
  const screen = render(<Main name="Spencer" />);

  screen.getByText("Welcome, Spencer!");
});

it("calls saveName on button press", () => {
  const saveName = jest.fn();

  const screen = render(<Main saveName={saveName} />);

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  fireEvent.press(screen.getByText("Change"));

  expect(saveName).toBeCalledWith("asdf");
});

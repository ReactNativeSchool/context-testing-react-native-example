import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Main from "../Main";
import { NameProvider } from "../../util/NameManager";

it("render default text", () => {
  const screen = render(<Main />, { wrapper: NameProvider });

  screen.getByText("Welcome, No Name!");
});

it("changes the text on submit", () => {
  const screen = render(<Main />, { wrapper: NameProvider });

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");

  screen.getByText("Welcome, No Name!");

  fireEvent.press(screen.getByText("Change"));

  screen.getByText("Welcome, asdf!");
});

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

// eslint-disable-next-line
import Main from "../Main";
import { NameProvider } from "../../util/NameManager";

jest.mock("../../util/NameManager", () => {
  const React2 = require("react");

  const FakeContext = React2.createContext();

  // eslint-disable-next-line
  const fakeuseName = () => React2.useContext(FakeContext);

  const FakeNameProvider = ({ children, value = {} }) => {
    return (
      <FakeContext.Provider value={value}>{children}</FakeContext.Provider>
    );
  };

  return {
    useName: fakeuseName,
    NameProvider: FakeNameProvider,
  };
});

it("render default text", () => {
  const screen = render(
    <NameProvider value={{ name: "Spencer" }}>
      <Main />
    </NameProvider>
  );

  screen.getByText("Welcome, Spencer!");
});

it("calls saveName on button press", () => {
  const saveName = jest.fn();

  const screen = render(
    <NameProvider value={{ saveName }}>
      <Main />
    </NameProvider>
  );

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  fireEvent.press(screen.getByText("Change"));

  expect(saveName).toBeCalledWith("asdf");
});

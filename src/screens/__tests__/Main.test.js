import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import MainDefault, { Main } from "../Main";
import { NameProvider } from "../../util/NameManager";

jest.mock("../../util/NameManager", () => {
  const React2 = require("react");

  const FakeNameContext = React2.createContext();

  const fakeuseName = () => React2.useContext(FakeNameContext);

  const FakeNameProvider = ({ children, value = {} }) => {
    return (
      <FakeNameContext.Provider value={value}>
        {children}
      </FakeNameContext.Provider>
    );
  };

  return {
    NameProvider: FakeNameProvider,
    useName: fakeuseName,
  };
});

// it("renders the default text", () => {
//   const screen = render(<Main />, { wrapper: NameProvider });

//   screen.getByText("Welcome, No Name!");
// });
// it("renders the default text", () => {
//   const screen = render(<MainDefault />, { wrapper: NameProvider });

//   screen.getByText("Enter your name:");
// });

// it("changes text upon submit", () => {
//   const screen = render(<Main />, { wrapper: NameProvider });

//   fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");

//   screen.getByText("Welcome, No Name!");

//   fireEvent.press(screen.getByText("Change"));

//   screen.getByText("Welcome, asdf!");
// });

// it("calls saveName on button press", () => {
//   const saveName = jest.fn();
//   const screen = render(<Main saveName={saveName} />);

//   fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
//   fireEvent.press(screen.getByText("Change"));

//   expect(saveName).toBeCalledWith("asdf");
// });

it("calls saveName on button press", () => {
  const saveName = jest.fn();
  const screen = render(
    <NameProvider value={{ saveName }}>
      <MainDefault />
    </NameProvider>
  );

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  fireEvent.press(screen.getByText("Change"));

  expect(saveName).toBeCalledWith("asdf");
});

it("renders the name from context", () => {
  const screen = render(
    <NameProvider value={{ name: "Spencer" }}>
      <MainDefault />
    </NameProvider>
  );

  screen.getByText("Welcome, Spencer!");
});

import React from "react";

const NameContext = React.createContext();

export const useName = () => React.useContext(NameContext);

export const NameProvider = ({ children }) => {
  const [name, saveName] = React.useState();

  return (
    <NameContext.Provider value={{ name, saveName }}>
      {children}
    </NameContext.Provider>
  );
};

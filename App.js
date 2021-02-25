import React from "react";

import Main from "./src/screens/Main";
import { NameProvider } from "./src/util/NameManager";

export default () => (
  <NameProvider>
    <Main />
  </NameProvider>
);

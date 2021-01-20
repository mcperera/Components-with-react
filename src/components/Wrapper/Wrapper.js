import React from "react";

import { wrapperContainer } from "./Wrapper.module.css";

function Wrapper({ children }) {
  return <div className={wrapperContainer}>{children}</div>;
}

export default Wrapper;

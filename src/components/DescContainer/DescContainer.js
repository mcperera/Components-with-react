import React from "react";

import { descContainer } from "./DescContainer.module.css";

function DescContainer({ children }) {
  return <div className={descContainer}>{children}</div>;
}

export default DescContainer;

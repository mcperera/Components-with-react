import React from "react";

import { compContainer } from "./CompContainer.module.css";

function CompContainer({ children }) {
  return <div className={`${compContainer}`}>{children}</div>;
}

export default CompContainer;

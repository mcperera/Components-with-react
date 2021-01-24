import React from "react";

import { compContainer, scrollBox } from "./CompContainer.module.css";

function CompContainer({ items }) {
  return (
    <div className={`${compContainer}`}>
      <div className={scrollBox}>{items}</div>
    </div>
  );
}

export default CompContainer;

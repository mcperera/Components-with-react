import React from "react";

import {
  circularWrapper,
  shadow,
  loader1,
  loader2,
} from "./CircularLoader.module.css";

function CircularLoader() {
  return (
    <div className={circularWrapper}>
      <div className={shadow}>
        <div className={loader1}>
          <div className={loader2}></div>
        </div>
      </div>
    </div>
  );
}

export default CircularLoader;

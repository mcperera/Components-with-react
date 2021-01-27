import React from "react";

import { barWrapper, loader1, loader2 } from "./BarLoader.module.css";

function BarLoader() {
  return (
    <div className={barWrapper}>
      <div className={loader1}>
        <div className={loader2}></div>
      </div>
    </div>
  );
}

export default BarLoader;

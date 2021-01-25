import React from "react";

import { banner } from "./Banner.module.css";

function Banner({ title, colors }) {
  return (
    <div className={banner} style={{ backgroundColor: `${colors}` }}>
      <p>{title}</p>
    </div>
  );
}

export default Banner;

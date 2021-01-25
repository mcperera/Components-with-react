import { colors } from "@material-ui/core";
import React from "react";

import { banner } from "./Banner.module.css";

function Banner({ title, bannerColor }) {
  return (
    <div className={banner} style={{ backgroundColor: `${bannerColor}` }}>
      <p>{title}</p>
    </div>
  );
}

export default Banner;

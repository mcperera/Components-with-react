import React from "react";

import { banner } from "./Banner.module.css";

function Banner({ title }) {
  return (
    <div className={banner}>
      <p>{title}</p>
    </div>
  );
}

export default Banner;

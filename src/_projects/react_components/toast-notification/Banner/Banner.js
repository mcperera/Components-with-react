import React from "react";

import {
  banner,
  bannerMoveToRight,
  bannerMoveToLeft,
  bannerMoveToBottom,
  bannerMoveToTop,
} from "./Banner.module.css";

function Banner({ title, colors, position }) {
  let positionSet = "";

  switch (position) {
    case "TopLeft":
      positionSet = bannerMoveToRight;
      break;
    case "TopRight":
      positionSet = bannerMoveToLeft;
      break;
    case "TopCenter":
      positionSet = bannerMoveToBottom;
      break;
    case "BottomCenter":
      positionSet = bannerMoveToTop;
      break;
    case "BottomLeft":
      positionSet = bannerMoveToRight;
      break;
    case "BottomRight":
      positionSet = bannerMoveToLeft;
      break;
    default:
      positionSet = bannerMoveToRight;
      break;
  }

  return (
    <div
      className={`${banner} ${positionSet}`}
      style={{ backgroundColor: `${colors}` }}>
      <p>{title}</p>
    </div>
  );
}

export default Banner;

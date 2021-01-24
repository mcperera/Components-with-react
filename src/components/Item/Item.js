import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import {
  itemContainer,
  previewBox,
  itemDetails,
  linksWrapper,
  moreArrow,
} from "./Item.module.css";

function Item({ id, title, handleItemDesc }) {
  const scrollToDesc = () => {
    document.getElementById("mainContainer").scrollTo({
      left: document.getElementById("mainContainer").scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={itemContainer}>
      <div className={previewBox}>
        <img
          src="https://d1tlw8zlp8jxtb.cloudfront.net/pub/media/highlights/default.jpg"
          alt="dummy"
        />
      </div>
      <div className={itemDetails}>
        <h3>{`${id}. ${title}`}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={linksWrapper}>
          <a
            href="https://github.com/mcperera"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <Link to={"/react/toast-notification"}>
            <LaunchIcon />
          </Link>
        </div>
      </div>
      <div
        className={moreArrow}
        onClick={() => {
          handleItemDesc();
          scrollToDesc();
        }}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Item;

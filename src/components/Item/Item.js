import React from "react";
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
  return (
    <div className={itemContainer}>
      <div className={previewBox}>
        <img
          src="https://lh3.googleusercontent.com/proxy/oeDAU-pHrYsuNNxmzykAG4hGxZGUku4WU3wQ-fFdlx6yJTCm_ys8eHrsn8sY4ewFKJOJQpTgOUOz34H1oNF3GoSbroSJfK2biMTlfxagfJiM4sMbzbLXU6JPcN7k1w"
          alt="dummy"
        />
      </div>
      <div className={itemDetails}>
        <h3>{`${id}. ${title}`}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={linksWrapper}>
          <GitHubIcon />
          <LaunchIcon />
        </div>
      </div>
      <div className={moreArrow} onClick={() => handleItemDesc()}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Item;

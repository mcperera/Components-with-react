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

function Item({ id, title, shortDesc, gitUrl, link, img, handleItemDesc }) {
  const scrollToDesc = () => {
    document.getElementById("mainContainer").scrollTo({
      left: document.getElementById("mainContainer").scrollWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={itemContainer}>
      <div className={previewBox}>
        <img src={img} alt={title} />
      </div>
      <div className={itemDetails}>
        <h3>{`${id}. ${title}`}</h3>
        <p>{shortDesc}</p>
        <div className={linksWrapper}>
          <a href={gitUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <Link to={`${link}`}>
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

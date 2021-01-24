import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { descContainer, backIcon } from "./DescContainer.module.css";

function DescContainer({ children, isSelected }) {
  const scrollToItems = () => {
    document.getElementById("mainContainer").scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${descContainer}`}>
      {isSelected > 0 && (
        <div className={backIcon}>
          <ArrowBackIosIcon onClick={() => scrollToItems()} />
        </div>
      )}
      {children}
    </div>
  );
}

export default DescContainer;

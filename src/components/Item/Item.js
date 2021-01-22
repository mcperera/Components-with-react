import React from "react";

import { itemContainer, testDive1, testDive } from "./Item.module.css";

function Item() {
  return (
    <div className={itemContainer}>
      <div className={testDive1}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIA-LAL-oksgjO8VCfHzrmnAjISV4riXquw&usqp=CAU"
          alt="dummy"
        />
      </div>
      <div className={testDive}></div>
      <p>Details</p>
    </div>
  );
}

export default Item;

import React from "react";

import { itemTitle, descContainer } from "./ItemDetail.module.css";

function ItemDetail({ id, title, description, img }) {
  return (
    <>
      <h2 className={itemTitle}>{`${id}. ${title}`}</h2>
      <div className={descContainer}>
        <img src={img} alt={title} />
        {description}
      </div>
    </>
  );
}

export default ItemDetail;

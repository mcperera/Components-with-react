import React from "react";

import { itemTitle, descContainer } from "./ItemDetail.module.css";

function ItemDetail({ id, title }) {
  return (
    <>
      <h2 className={itemTitle}>{`${id}. ${title}`}</h2>
      <div className={descContainer}>
        <img
          src="https://d1tlw8zlp8jxtb.cloudfront.net/pub/media/highlights/default.jpg"
          alt="dummy"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, totam numquam. Itaque atque aspernatur ipsa laboriosam
          accusamus odit autem, error vel nam dolor cum fugit dicta libero
          dignissimos facilis eum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, totam numquam. Itaque atque aspernatur ipsa laboriosam
          accusamus odit autem, error vel nam dolor cum fugit dicta libero
          dignissimos facilis eum? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Necessitatibus, totam numquam. Itaque atque
          aspernatur ipsa laboriosam accusamus odit autem, error vel nam dolor
          cum fugit dicta libero dignissimos facilis eum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, totam numquam. Itaque atque aspernatur ipsa laboriosam
          accusamus odit autem, error vel nam dolor cum fugit dicta libero
          dignissimos facilis eum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, totam numquam. Itaque atque aspernatur ipsa laboriosam
          accusamus odit autem, error vel nam dolor cum fugit dicta libero
          dignissimos facilis eum?
        </p>
      </div>
    </>
  );
}

export default ItemDetail;

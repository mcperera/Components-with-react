import React from "react";

import { itemTitle, descContainer } from "./ItemDetail.module.css";

function ItemDetail({ id, title }) {
  return (
    <>
      <h2 className={itemTitle}>{`${id}. ${title}`}</h2>
      <div className={descContainer}>
        <img
          src="https://lh3.googleusercontent.com/proxy/oeDAU-pHrYsuNNxmzykAG4hGxZGUku4WU3wQ-fFdlx6yJTCm_ys8eHrsn8sY4ewFKJOJQpTgOUOz34H1oNF3GoSbroSJfK2biMTlfxagfJiM4sMbzbLXU6JPcN7k1w"
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

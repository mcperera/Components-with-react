import React from "react";

import { PageLayout } from "../../components";
import loading from "../../assets/images/_projects/css/loading/loading.png";

const itemList = [
  {
    id: 1,
    title: "Circular Loading",
    shortDesc: "Animated Loading circle.",
    gitUrl:
      "https://github.com/mcperera/Components-with-react/tree/master/src/_projects/react_components/toast-notification",
    link: "/css/circular-loading",
    description: (
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, totam numquam. Itaque atque aspernatur ipsa laboriosam
        accusamus odit autem, error vel nam dolor cum fugit dicta libero
        dignissimos facilis eum? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Necessitatibus, totam numquam. <br /> Itaque atque
        aspernatur ipsa laboriosam accusamus odit autem, error vel nam dolor cum
        fugit dicta libero dignissimos facilis eum? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Necessitatibus, totam numquam. Itaque
        atque aspernatur ipsa laboriosam accusamus odit autem, error vel nam
        dolor cum fugit dicta libero dignissimos facilis eum?
      </p>
    ),
    img: loading,
  },
];

function CssCompo() {
  return <PageLayout itemList={itemList} />;
}

export default CssCompo;

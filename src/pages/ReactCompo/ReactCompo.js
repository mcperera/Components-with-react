import React from "react";

import { PageLayout } from "../../components";
import toast from "../../assets/images/_projects/react/toast/toast.png";
import map from "../../assets/images/_projects/react/map/map.png";
import search from "../../assets/images/_projects/react/search/search.png";

const itemList = [
  {
    id: 1,
    title: "Toast Notifications",
    shortDesc: "Simple, customizable notification popup with positionings",
    gitUrl:
      "https://github.com/mcperera/Components-with-react/tree/master/src/_projects/react_components/toast-notification",
    link: "/react/toast-notification",
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
    img: toast,
  },
  {
    id: 2,
    title: "Google Maps",
    shortDesc: "Google Maps integration with react",
    gitUrl:
      "https://github.com/mcperera/Components-with-react/tree/master/src/_projects/react_components/google-map",
    link: "/react/google-maps",
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
    img: map,
  },
  {
    id: 3,
    title: "Search 🔍",
    shortDesc: "Basic search component with search suggestions",
    gitUrl:
      "https://github.com/mcperera/Components-with-react/tree/master/src/_projects/react_components/Search",
    link: "/react/search",
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
    img: search,
  },
];

function ReactCompo() {
  return <PageLayout itemList={itemList} />;
}

export default ReactCompo;

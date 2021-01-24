import React from "react";

import { PageLayout } from "../../components";

const itemList = [
  {
    id: 1,
    title: "React Component Name",
  },
  {
    id: 2,
    title: "React Component Name",
  },
  {
    id: 3,
    title: "React Component Name",
  },
  {
    id: 4,
    title: "React Component Name",
  },
  {
    id: 5,
    title: "React Component Name",
  },
];

function ReactCompo() {
  return <PageLayout itemList={itemList} />;
}

export default ReactCompo;

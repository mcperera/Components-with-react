import React from "react";

import { PageLayout } from "../../components";

const itemList = [
  {
    id: 1,
    title: "CSS Component Name",
  },
  {
    id: 2,
    title: "CSS Component Name",
  },
];

function CssCompo() {
  return <PageLayout itemList={itemList} />;
}

export default CssCompo;

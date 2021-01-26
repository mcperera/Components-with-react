import React from "react";

import { PageLayout } from "../../components";

const itemList = [
  {
    id: 1,
    title: "Test",
  },
];

function CssCompo() {
  return <PageLayout itemList={itemList} />;
}

export default CssCompo;

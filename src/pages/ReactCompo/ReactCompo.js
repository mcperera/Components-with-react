import React from "react";

import {
  MainContainer,
  CompContainer,
  DescContainer,
  Item,
  ItemDetail,
} from "../../components";

function ReactCompo() {
  let testItems = [];

  for (var i = 0; i < 10; i++) {
    testItems.push(<Item key={i} id={i + 1} />);
  }

  return (
    <MainContainer>
      <CompContainer>{testItems}</CompContainer>
      <DescContainer>
        <ItemDetail />
      </DescContainer>
    </MainContainer>
  );
}

export default ReactCompo;

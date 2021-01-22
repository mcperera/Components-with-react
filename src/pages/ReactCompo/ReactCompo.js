import React from "react";

import {
  MainContainer,
  CompContainer,
  DescContainer,
  Item,
} from "../../components";

function ReactCompo() {
  let testItems = [];

  for (var i = 0; i < 10; i++) {
    testItems.push(<Item key={i} />);
  }

  return (
    <MainContainer>
      <CompContainer>{testItems}</CompContainer>
      <DescContainer>React Description</DescContainer>
    </MainContainer>
  );
}

export default ReactCompo;

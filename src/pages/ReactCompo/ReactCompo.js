import React from "react";

import {
  MainContainer,
  CompContainer,
  DescContainer,
  Item,
} from "../../components";

function ReactCompo() {
  return (
    <MainContainer>
      <CompContainer>
        <Item />
      </CompContainer>
      <DescContainer>React Description</DescContainer>
    </MainContainer>
  );
}

export default ReactCompo;

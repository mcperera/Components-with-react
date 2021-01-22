import React from "react";

import {
  Dashboard,
  MainContainer,
  CompContainer,
  DescContainer,
} from "../../components";

function ReactCompo() {
  return (
    <MainContainer>
      <CompContainer>
        <h1>React Componets</h1>
      </CompContainer>
      <DescContainer>React Description</DescContainer>
    </MainContainer>
  );
}

export default ReactCompo;

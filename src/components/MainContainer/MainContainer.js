import React from "react";

import { Wrapper } from "../";

import { mainContainer } from "./MainContainer.module.css";

function MainContainer() {
  return (
    <Wrapper>
      <div className={mainContainer}></div>
    </Wrapper>
  );
}

export default MainContainer;

import React from "react";

import { Wrapper } from "../";

import { mainContainer } from "./MainContainer.module.css";

function MainContainer({ children }) {
  return (
    <Wrapper>
      <div className={mainContainer}>{children}</div>
    </Wrapper>
  );
}

export default MainContainer;

import React from "react";

import { Wrapper } from "../";

import { mainContainer } from "./MainContainer.module.css";

function MainContainer({ children, className }) {
  return (
    <Wrapper>
      <div
        id={"mainContainer"}
        className={`${mainContainer} ${className ? className : null}`}>
        {children}
      </div>
    </Wrapper>
  );
}

export default MainContainer;

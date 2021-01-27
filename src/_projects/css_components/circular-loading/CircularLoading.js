import React from "react";

import { MainContainer } from "../../../components";
import {
  circularMain,
  circularWrapper,
  loader1,
  loader2,
} from "./CircularLoading.module.css";

function CircularLoading() {
  return (
    <MainContainer className={circularMain}>
      <h2 className="pageTitle">- Circular Loading -</h2>
      <div className={circularWrapper}>
        <div className={loader1}>
          <div className={loader2}></div>
        </div>
      </div>
    </MainContainer>
  );
}

export default CircularLoading;

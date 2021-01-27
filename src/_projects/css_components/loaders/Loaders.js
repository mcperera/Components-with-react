import React from "react";

import { MainContainer } from "../../../components";
import { CircularLoader, BarLoader, TextLoader } from "../index";

import { loaderMain, expandTitle } from "./Loader.module.css";

function Loaders() {
  return (
    <MainContainer className={loaderMain}>
      <h2 className={`pageTitle ${expandTitle}`}>- Loaders -</h2>
      <TextLoader />
      <BarLoader />
      <CircularLoader />
    </MainContainer>
  );
}

export default Loaders;

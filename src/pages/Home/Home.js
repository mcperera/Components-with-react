import React from "react";

import { MainContainer } from "../../components";

import { mainBackground } from "./Home.module.css";

function Home() {
  return (
    <MainContainer className={mainBackground}>
      <h1>Hello Home</h1>
    </MainContainer>
  );
}

export default Home;

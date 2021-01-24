import React from "react";

import { MainContainer } from "../../components";

import { mainBackground } from "./Home.module.css";

function Home() {
  return (
    <MainContainer className={mainBackground}>
      <p>Hello World! 😍 Stay Tuned! 🤞</p>
    </MainContainer>
  );
}

export default Home;

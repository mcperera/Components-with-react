import React from "react";

import { MainContainer } from "../../components";

import { mainBackground, btn } from "./Home.module.css";

function Home() {
  return (
    <MainContainer className={mainBackground}>
      <h2 className="pageTitle">- Hello World! 😍 -</h2>
      <p>
        In this site you can find out most useful React and CSS components which
        we are used to add on our websites most of the time. <br />
        I'm still working on this and happy to listen to your thoughts as well.
      </p>
      <a className={btn} href="mailto:madushanperera3817@gmail.com">
        Comments
      </a>
    </MainContainer>
  );
}

export default Home;

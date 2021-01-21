import React from "react";

import {
  Header,
  MainContainer,
  CompContainer,
  DescContainer,
} from "../../components";

import { dashboardWrapper, mainContainer } from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={dashboardWrapper}>
      <Header />
      <main className={mainContainer}>
        <MainContainer>
          <CompContainer />
          <DescContainer />
        </MainContainer>
      </main>
    </div>
  );
}

export default Dashboard;

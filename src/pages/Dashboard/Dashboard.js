import React from "react";

import { Header, MainContainer } from "../../components";

import { dashboardWrapper, mainContainer } from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={dashboardWrapper}>
      <Header />
      <main className={mainContainer}>
        <MainContainer />
      </main>
    </div>
  );
}

export default Dashboard;

import React from "react";

import { Header } from "../../components";

import { dashboardWrapper, mainContainer } from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={dashboardWrapper}>
      <Header />
      <main className={mainContainer}></main>
    </div>
  );
}

export default Dashboard;

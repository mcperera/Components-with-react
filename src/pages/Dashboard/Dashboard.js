import React from "react";

import { Header } from "../../components";

import { dashboardWrapper } from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={dashboardWrapper}>
      <Header />
    </div>
  );
}

export default Dashboard;

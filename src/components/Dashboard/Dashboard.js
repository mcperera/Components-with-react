import React from "react";

import { Header } from "../";

import { dashboardWrapper } from "./Dashboard.module.css";

function Dashboard({ children }) {
  return (
    <div className={dashboardWrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Dashboard;

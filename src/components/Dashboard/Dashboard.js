import React from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../";

import {
  dashboardWrapper,
  homeStyle,
  reactStyle,
  cssStyle,
} from "./Dashboard.module.css";

function Dashboard({ children }) {
  const { pathname } = useLocation();

  // Ternary Operators --> lol
  const pageStyle =
    pathname === "/"
      ? homeStyle
      : pathname === "/react"
      ? reactStyle
      : pathname === "/css"
      ? cssStyle
      : null;

  return (
    <div className={dashboardWrapper}>
      <Header />
      <main className={pageStyle}>{children}</main>
    </div>
  );
}

export default Dashboard;

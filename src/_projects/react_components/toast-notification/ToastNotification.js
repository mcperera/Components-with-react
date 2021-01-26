import React from "react";

import { MainContainer } from "../../../components";

import ToastWrapper from "./ToastWrapper/ToastWrapper";
import ToastForm from "./ToastForm/ToastForm";

import { toastMain, pageTitle } from "./ToastNotification.module.css";

function ToastNotification() {
  return (
    <MainContainer className={toastMain}>
      <h2 className={pageTitle}>- Toast Notifications -</h2>
      <ToastWrapper>
        <ToastForm />
      </ToastWrapper>
    </MainContainer>
  );
}

export default ToastNotification;

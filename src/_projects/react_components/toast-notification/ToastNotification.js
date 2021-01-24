import React, { useState } from "react";

import { MainContainer } from "../../../components";

import { toastMain, container, banner } from "./ToastNotification.module.css";

function ToastNotification() {
  const [showBanner, setShowBanner] = useState(false);
  // const [bannerText, setBannerText] = useState("Hello I'm the banner");

  function autoHidebanne() {
    if (showBanner) {
      setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    }
  }

  autoHidebanne();

  return (
    <MainContainer className={toastMain}>
      <div className={container}>
        {showBanner && (
          <div className={banner}>
            <p>Hello I'm the banner</p>
          </div>
        )}
        <button onClick={() => setShowBanner((prev) => !prev)}>
          Click Me :)
        </button>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

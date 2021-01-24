import React, { useState } from "react";

import { MainContainer } from "../../../components";

import {
  toastMain,
  container,
  bannerStack,
  banner,
} from "./ToastNotification.module.css";

const Banner = () => {
  return (
    <div className={banner}>
      <p>Hello I'm the banner</p>
    </div>
  );
};

function ToastNotification() {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerArray, setBannerArray] = useState([]);
  // const [bannerText, setBannerText] = useState("Hello I'm the banner");

  function autoRemoveBanner() {
    setTimeout(() => {
      setBannerArray((prev) => {
        const newBanners = prev;
        newBanners.shift();
        return newBanners;
      });
      setShowBanner((prev) => !prev);
    }, 3000);
  }

  function addToBannerArray() {
    setBannerArray((prev) => {
      if (prev) {
        return [...prev, <Banner key={Math.random() + 1} />];
      } else {
        return [<Banner key={Math.random() + 1} />];
      }
    });
    autoRemoveBanner();
  }

  return (
    <MainContainer className={toastMain}>
      <div className={container}>
        {bannerArray && <div className={bannerStack}>{bannerArray}</div>}
        <button onClick={() => addToBannerArray()}>Click Me :)</button>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

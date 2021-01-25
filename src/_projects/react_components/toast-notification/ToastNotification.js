import React, { useState } from "react";

import { MainContainer } from "../../../components";
import Banner from "./Banner/Banner";

import {
  toastMain,
  container,
  bannerStack,
  btn,
} from "./ToastNotification.module.css";

function ToastNotification() {
  const [bannerArray, setBannerArray] = useState([]);

  function autoRemoveBanner() {
    setTimeout(() => {
      setBannerArray((prev) => {
        const newBanners = prev.slice(1, prev.length);
        //newBanners.shift();
        return newBanners;
      });
    }, 4000);
  }

  function addToBannerArray() {
    setBannerArray((prev) => {
      if (prev) {
        return [
          ...prev,
          { key: Math.random() * 2, title: "Hello I'm the banner" },
        ];
      } else {
        return [{ key: Math.random() + 1, title: "Hello I'm the banner" }];
      }
    });
    autoRemoveBanner();
  }

  console.log(bannerArray);

  return (
    <MainContainer className={toastMain}>
      <div className={container}>
        {bannerArray && (
          <div className={bannerStack}>
            {bannerArray.map((item) => {
              return <Banner key={item.key} title={item.title} />;
            })}
          </div>
        )}
        <button className={btn} onClick={() => addToBannerArray()}>
          Toast Me 😊
        </button>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

import React, { useState } from "react";

import { MainContainer } from "../../../components";

import {
  toastMain,
  container,
  bannerStack,
  banner,
} from "./ToastNotification.module.css";

const Banner = ({ title }) => {
  return (
    <div className={banner}>
      <p>{title}</p>
    </div>
  );
};

function ToastNotification() {
  const [bannerArray, setBannerArray] = useState([]);

  function autoRemoveBanner() {
    setTimeout(() => {
      setBannerArray((prev) => {
        const newBanners = prev.slice(1, prev.length);
        //newBanners.shift();
        return newBanners;
      });
    }, 3000);
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
        <button onClick={() => addToBannerArray()}>Click Me :)</button>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

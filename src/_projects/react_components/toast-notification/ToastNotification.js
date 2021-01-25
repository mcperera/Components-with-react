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
  const [title, setTitle] = useState("Hello I'm the banner");

  function autoRemoveBanner() {
    setTimeout(() => {
      setBannerArray((prev) => {
        const newBanners = prev.slice(1, prev.length);
        //newBanners.shift();
        return newBanners;
      });
    }, 4000);
  }

  function addToBannerArray(event) {
    event.preventDefault();
    console.log(title);
    setBannerArray((prev) => {
      if (prev) {
        return [...prev, { key: Math.random() * 2, title }];
      } else {
        return [{ key: Math.random() + 1, title }];
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
        <form onSubmit={(e) => addToBannerArray(e)}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className={btn} type="submit">
            Toast Me 😊
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

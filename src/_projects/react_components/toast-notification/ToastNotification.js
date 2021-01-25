import React, { useState } from "react";

import { MainContainer } from "../../../components";
import Banner from "./Banner/Banner";
import Input from "./ColorInput/ColorInput";

import {
  toastMain,
  container,
  bannerStack,
  formContainer,
  radioRow,
  btn,
} from "./ToastNotification.module.css";

function ToastNotification() {
  const [bannerArray, setBannerArray] = useState([]);
  const [title, setTitle] = useState("Hello, I need a title 👻");
  const [bannerColor, setBannerColor] = useState("blue");

  const handleInputs = (e) => {
    switch (e.target.type) {
      case "radio":
        setBannerColor(e.target.value);
        break;
      case "text":
        setTitle(e.target.value);

        break;
      default:
        break;
    }
  };

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

    setBannerArray((prev) => {
      if (prev) {
        return [...prev, { key: Math.random() * 2, title, bannerColor }];
      } else {
        return [{ key: Math.random() + 1, title }];
      }
    });
    autoRemoveBanner();
  }

  return (
    <MainContainer className={toastMain}>
      <div className={container}>
        {bannerArray && (
          <div className={bannerStack}>
            {bannerArray.map((item) => {
              return (
                <Banner
                  key={item.key}
                  title={item.title}
                  bannerColor={item.bannerColor}
                />
              );
            })}
          </div>
        )}
        <form onSubmit={(e) => addToBannerArray(e)} className={formContainer}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputs}
          />
          <div className={radioRow}>
            <Input
              type="radio"
              name="colors"
              value="blue"
              label="Blue"
              onChange={handleInputs}
              checked={bannerColor === "blue"}
            />
            <Input
              type="radio"
              name="colors"
              value="teal"
              label="Teal"
              onChange={handleInputs}
              checked={bannerColor === "teal"}
            />
            <Input
              type="radio"
              name="colors"
              value="green"
              label="Green"
              onChange={handleInputs}
              checked={bannerColor === "green"}
            />
            <Input
              type="radio"
              name="colors"
              value="red"
              label="Red"
              onChange={handleInputs}
              checked={bannerColor === "red"}
            />
          </div>
          <button className={btn} type="submit">
            Toast Me 😊
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

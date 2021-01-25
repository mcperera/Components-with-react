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

const colorRadioBtns = [
  {
    value: "black",
    label: "Black",
  },
  {
    value: "teal",
    label: "Teal",
  },
  {
    value: "lime",
    label: "Lime",
  },
  {
    value: "red",
    label: "Red",
  },
];

function ToastNotification() {
  const [bannerArray, setBannerArray] = useState([]);
  const [bannerDetails, setBannerDetails] = useState({
    title: "Hello, I need a title 👻",
    colors: "black",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setBannerDetails((prev) => {
      return { ...prev, [name]: value };
    });
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
    const { title, colors } = bannerDetails;

    setBannerArray((prev) => {
      if (prev) {
        return [...prev, { key: Math.random() * 2, title, colors }];
      } else {
        return [{ key: Math.random() + 1, title }];
      }
    });
    // autoRemoveBanner();
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
                  colors={item.colors}
                />
              );
            })}
          </div>
        )}
        <form onSubmit={(e) => addToBannerArray(e)} className={formContainer}>
          <input
            type="text"
            name="title"
            value={bannerDetails.title}
            onChange={handleInputs}
          />
          <div className={radioRow}>
            {colorRadioBtns.map((item, index) => {
              const { value, label } = item;
              return (
                <Input
                  key={index}
                  type="radio"
                  name="colors"
                  value={value}
                  label={label}
                  onChange={handleInputs}
                  checked={bannerDetails.colors === value}
                />
              );
            })}
          </div>
          <button className={btn} type="submit">
            Toast Me! 😊
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

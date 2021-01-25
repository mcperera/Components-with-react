import React, { useState } from "react";

import { MainContainer } from "../../../components";
import Banner from "./Banner/Banner";
import InputRadio from "./InputRadio/InputRadio";

import {
  toastMain,
  container,
  bannerStack,
  formContainer,
  radioRow,
  btn,
  stackTopLeft,
  stackTopRight,
  stackBottomLeft,
  stackBottomRight,
  stackTopCenter,
  stackBottomCenter,
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

const positionRadioBtns = [
  {
    position: "TopLeft",
    label: "Top Left",
  },
  {
    position: "TopRight",
    label: "Top Right",
  },
  {
    position: "TopCenter",
    label: "Top Center",
  },
  {
    position: "BottomCenter",
    label: "Bottom Center",
  },
  {
    position: "BottomLeft",
    label: "Bottom Left",
  },
  {
    position: "BottomRight",
    label: "Bottom Right",
  },
];

function ToastNotification() {
  const [bannerArray, setBannerArray] = useState([]);
  const [bannerDetails, setBannerDetails] = useState({
    title: "Hello, I need a title 👻",
    colors: "black",
    position: "TopLeft",
  });

  let position = null;

  switch (bannerDetails.position) {
    case "TopLeft":
      position = stackTopLeft;
      break;
    case "TopRight":
      position = stackTopRight;
      break;
    case "TopCenter":
      position = stackTopCenter;
      break;
    case "BottomCenter":
      position = stackBottomCenter;
      break;
    case "BottomLeft":
      position = stackBottomLeft;
      break;
    case "BottomRight":
      position = stackBottomRight;
      break;
    default:
      position = stackTopLeft;
      break;
  }

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
        //newBanners.shift(); cannot use since this isn't returning a new array
        return newBanners;
      });
    }, 4000);
  }

  function addToBannerArray(event) {
    event.preventDefault();
    const { title, colors, position } = bannerDetails;
    setBannerArray((prev) => {
      if (prev) {
        return [...prev, { key: Math.random() * 2, title, colors, position }];
      } else {
        return [{ key: Math.random() * 2, title, colors, position }];
      }
    });
    autoRemoveBanner();
  }

  return (
    <MainContainer className={toastMain}>
      <div className={container}>
        {bannerArray && (
          <div className={`${bannerStack} ${position}`}>
            {bannerArray.map((item) => {
              const { key, title, colors, position } = item;
              return (
                <Banner
                  key={key}
                  title={title}
                  colors={colors}
                  position={position}
                />
              );
            })}
          </div>
        )}
        <form onSubmit={(e) => addToBannerArray(e)} className={formContainer}>
          <h3>Banner Title</h3>
          <input
            type="text"
            name="title"
            value={bannerDetails.title}
            onChange={handleInputs}
          />
          <h3>Color</h3>
          <div className={radioRow}>
            {colorRadioBtns.map((item, index) => {
              const { value, label } = item;
              return (
                <InputRadio
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
          <h3>Position</h3>
          <div className={radioRow}>
            {positionRadioBtns.map((item, index) => {
              const { position, label } = item;
              return (
                <InputRadio
                  key={index}
                  type="radio"
                  name="position"
                  value={position}
                  label={label}
                  onChange={handleInputs}
                  checked={bannerDetails.position === position}
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

import React, { useState } from "react";

import { MainContainer } from "../../../components";
import Banner from "./Banner/Banner";
import InputRadio from "./InputRadio/InputRadio";

import {
  toastMain,
  pageTitle,
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
    position: "TopCenter",
    label: "Top Center",
  },
  {
    position: "TopRight",
    label: "Top Right",
  },
  {
    position: "BottomLeft",
    label: "Bottom Left",
  },
  {
    position: "BottomRight",
    label: "Bottom Right",
  },
  {
    position: "BottomCenter",
    label: "Bottom Center",
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
        //const newBanners = prev.slice(1, prev.length);
        const newBanners = prev.slice(0, prev.length - 1); // ---> swap 1
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
        //return [...prev, { key: Math.random() * 2, title, colors, position }];
        return [{ key: Math.random() * 2, title, colors, position }, ...prev]; // ---> swap 1
      } else {
        return [{ key: Math.random() * 2, title, colors, position }];
      }
    });
    autoRemoveBanner();
  }

  return (
    <MainContainer className={toastMain}>
      <h2 className={pageTitle}>- Toast Notifications -</h2>
      <div className={container}>
        {bannerArray.length > 0 && (
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
          <section>
            <h3>Enter Your Banner Title</h3>
            <input
              type="text"
              name="title"
              value={bannerDetails.title}
              onChange={handleInputs}
            />
          </section>
          <section>
            <h3>Select Banner Color</h3>
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
          </section>
          <section>
            <h3>Banner Position</h3>
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
          </section>
          <button className={btn} type="submit">
            Toast Me! 😊
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default ToastNotification;

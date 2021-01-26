import React, { useState, createContext } from "react";

import Banner from "./Banner/Banner";

import {
  toastWrapper,
  bannerStack,
  stackTopLeft,
  stackTopRight,
  stackBottomLeft,
  stackBottomRight,
  stackTopCenter,
  stackBottomCenter,
} from "./ToastWrapper.module.css";

const ToastContext = createContext();

function ToastWrapper({ children }) {
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
    <ToastContext.Provider
      value={{ handleInputs, addToBannerArray, bannerDetails }}>
      <div className={toastWrapper}>
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
        {children}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastWrapper;
export { ToastContext };
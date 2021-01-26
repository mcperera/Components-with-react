import React, { useContext } from "react";

import InputRadio from "./InputRadio/InputRadio";
import { ToastContext } from "../ToastWrapper/ToastWrapper";

import { formContainer, radioRow, btn } from "./ToastForm.module.css";

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

function ToastForm() {
  const { handleInputs, addToBannerArray, bannerDetails } = useContext(
    ToastContext
  );

  return (
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
  );
}

export default ToastForm;

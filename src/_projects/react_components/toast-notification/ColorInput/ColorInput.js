import React from "react";

import { radioBox, radioInput } from "./ColorInput.module.css";

export default function ColorInput({
  type,
  name,
  value,
  label,
  onChange,
  checked,
}) {
  return (
    <div className={radioBox}>
      <input
        className={radioInput}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
}

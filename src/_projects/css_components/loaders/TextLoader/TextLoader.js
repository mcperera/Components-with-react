import React from "react";

import { textWrapper, load } from "./TextLoader.module.css";

function TextLoader() {
  return (
    <div className={textWrapper}>
      <div className={load}>
        <span style={{ "--delay": 1 }}>L</span>
        <span style={{ "--delay": 2 }}>o</span>
        <span style={{ "--delay": 3 }}>a</span>
        <span style={{ "--delay": 4 }}>d</span>
        <span style={{ "--delay": 5 }}>i</span>
        <span style={{ "--delay": 6 }}>n</span>
        <span style={{ "--delay": 7 }}>g</span>
        <span style={{ "--delay": 8 }}>.</span>
        <span style={{ "--delay": 9 }}>.</span>
        <span style={{ "--delay": 10 }}>.</span>
      </div>
    </div>
  );
}

export default TextLoader;

import React from "react";

import { MainContainer } from "../../../components";
import { MapWrapper } from "../";

import { mapMain, searchContainer, btn } from "./GoogleMap.module.css";

function GoogleMap() {
  return (
    <MainContainer className={mapMain}>
      <MapWrapper>
        <div className={searchContainer}>
          <form>
            <input type="text" />
            <button className={btn}>Search</button>
          </form>
        </div>
      </MapWrapper>
    </MainContainer>
  );
}

export default GoogleMap;

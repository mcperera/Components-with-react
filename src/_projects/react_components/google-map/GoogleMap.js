import React from "react";
import { MainContainer } from "../../../components";
import { MapWrapper } from "../";
import { mapMain } from "./GoogleMap.module.css";
import SearchForm from "./SearchForm/SearchForm";
import { ToastWrapper } from "../";

require("dotenv").config();

function GoogleMap() {
  return (
    <MainContainer className={mapMain}>
      <h2 className="pageTitle">- Google Maps -</h2>
      <ToastWrapper>
        <MapWrapper
          apiKey={process.env.REACT_APP_API_KEY}
          defaultLocation={"Colombo, Sri Lanka"}>
          <SearchForm />
        </MapWrapper>
      </ToastWrapper>
    </MainContainer>
  );
}

export default GoogleMap;

import React from "react";
import { MainContainer } from "../../../components";

import { mapMain, searchContainer, btn } from "./Search.module.css";

function search() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <MainContainer className={mapMain}>
      <h2 className="pageTitle">- Search -</h2>
      <div className={searchContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search something.." />
          <button className={btn} type="submit">
            Search
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default search;

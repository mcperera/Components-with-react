import React, { useState } from "react";
import { MainContainer } from "../../../components";
import { mapMain, searchContainer, btn } from "./Search.module.css";

const rootURL = "https://api.github.com";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showUser, setShowUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchValue);
    // fetch(`${rootURL}/users/${event.target.value}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     setShowUser(result);
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <MainContainer className={mapMain}>
      <h2 className="pageTitle">- Search -</h2>
      <div className={searchContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for.."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className={btn} type="submit">
            Search
          </button>
        </form>
        <p>{searchValue}</p>
        <p>{showUser}</p>
        {/* {showUser.login && (
          <>
            <p>I'm here : {showUser.login}</p>{" "}
            <img src={showUser.avatar_url} alt={showUser.login} />
          </>
        )} */}
      </div>
    </MainContainer>
  );
}

export default Search;

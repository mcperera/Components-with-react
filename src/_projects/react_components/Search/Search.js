import React, { useState } from "react";
import { MainContainer } from "../../../components";
import {
  mapMain,
  searchContainer,
  btn,
  searchContent,
} from "./Search.module.css";

//const rootURL = "https://api.github.com";
const rootURL = "https://api.itbook.store/1.0/";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showBooks, setShowBooks] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("log ", event.target.value);
    setSearchValue(event.target.value);
    fetch(`${rootURL}/search/${event.target.value}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("result ", result);
        const { books } = result;
        if (books.length > 0) {
          setShowBooks(books);
          setShowError(false);
        } else {
          setShowError(true);
        }
      })
      .catch((error) => {
        console.log("error-->", error);
        setShowError(true);
      });
  };

  return (
    <MainContainer className={mapMain}>
      <h2 className="pageTitle">- Search -</h2>
      <div className={searchContainer}>
        <form>
          <input
            type="text"
            placeholder="Search for IT books.."
            value={searchValue}
            onChange={handleSearch}
          />
          {/* <button className={btn} type="submit">
            Search
          </button> */}
        </form>
        <div className={searchContent}>
          {showError && <p>No Books Found!</p>}
          <ul>
            {showBooks?.map((book) => {
              return <li>{book.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </MainContainer>
  );
}

export default Search;

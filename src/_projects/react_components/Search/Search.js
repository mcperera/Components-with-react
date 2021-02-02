import React, { useState } from "react";
import { MainContainer } from "../../../components";
import {
  mapMain,
  searchContainer,
  searchContent,
  card,
} from "./Search.module.css";

//const rootURL = "https://api.github.com";
const rootURL = "https://api.itbook.store/1.0/";

const BookCard = ({ title, subtitle, image, isbn13, price }) => {
  return (
    <div className={card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{price}</p>
      <span>ISBN : {isbn13}</span>
    </div>
  );
};

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showBooks, setShowBooks] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("log ", event.target.value);
    setSearchValue(event.target.value);
    fetch(
      `https://cors-anywhere.herokuapp.com/${rootURL}/search/${event.target.value}`
    )
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
        setShowBooks([]);
        if (event.target.value === "") {
          setShowError(false);
        }
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
          {showBooks?.map((book, index) => {
            return <BookCard key={index} {...book} />;
          })}
        </div>
      </div>
    </MainContainer>
  );
}

export default Search;

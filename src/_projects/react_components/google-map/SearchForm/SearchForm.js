import React, { useContext, useEffect } from "react";

import { ToastContext } from "../../toast-notification/ToastWrapper/ToastWrapper";
import { MapContext } from "../MapWrapper/MapWrapper";
import { searchContainer, btn } from "./SearchForm.module.css";

function SearchForm() {
  const { searchValue, setSearchValue, searchLocation } = useContext(
    MapContext
  );
  const { addToBannerArray, setBannerDetails } = useContext(ToastContext);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();

    if (searchValue) {
      searchLocation(event);
    } else {
      addToBannerArray(event);
    }
  };

  useEffect(() => {
    setBannerDetails((prev) => {
      return {
        ...prev,
        title: "You need to type something.. 😊",
      };
    });
  }, [setBannerDetails]);

  return (
    <div className={searchContainer}>
      <form onSubmit={searchSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search your location.."
        />
        <button className={btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

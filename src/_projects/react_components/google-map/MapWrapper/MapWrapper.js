import React, { useRef, useEffect, createContext, useState } from "react";
import { mapWrapper, mapContainer } from "./MapWrapper.module.css";
//require("dotenv").config();

const MapContext = createContext();

function MapWrapper({ children, apiKey, defaultLocation, defaultUI = false }) {
  const [searchValue, setSearchValue] = useState("");
  const googleMapRef = useRef();

  let googleMap;
  let placeName = defaultLocation && defaultLocation;

  const searchLocation = (event) => {
    event.preventDefault();
    if (searchValue) {
      placeName = searchValue;
      getLatLng();
      setSearchValue("");
    } else {
      alert("Yo.. Type something 🙄");
    }
  };

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
      disableDefaultUI: defaultUI,
    });
  };

  const getLatLng = () => {
    let lat, lng; //placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          //placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          new window.google.maps.Marker({
            position: { lat, lng },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `${placeName}`,
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      }
    );
  };

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng();
    });
  }, [apiKey]);

  return (
    <MapContext.Provider
      value={{ searchValue, setSearchValue, searchLocation }}>
      <div className={mapWrapper}>
        <div id="google-map" ref={googleMapRef} className={mapContainer} />
        {children}
      </div>
    </MapContext.Provider>
  );
}

export default MapWrapper;
export { MapContext };

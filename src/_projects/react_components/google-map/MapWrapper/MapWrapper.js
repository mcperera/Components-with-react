import React, { useRef, useEffect } from "react";
import { mapWrapper, mapContainer } from "./MapWrapper.module.css";
require("dotenv").config();

function MapWrapper({ children }) {
  const googleMapRef = useRef();
  let googleMap;
  let placeName = "Colombo, Sri Lanka";

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
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
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      getLatLng();
    });
  }, []);

  return (
    <div className={mapWrapper}>
      <div id="google-map" ref={googleMapRef} className={mapContainer} />
      {children}
    </div>
  );
}

export default MapWrapper;

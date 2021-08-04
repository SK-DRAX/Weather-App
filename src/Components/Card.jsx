import React, { useState } from "react";
import SearchButton from "./SearchButton";
import WeatherDet from "./WeatherDet";

function Card() {
  const [location, setLocation] = useState("");
  function itemSaved(event) {
    const newItemValue = event.target.value;
    setLocation(newItemValue);
  }
  const [createLocation, setCreateLocation] = useState("mumbai");
  function displayWeather() {
    setCreateLocation(location);
    setLocation("");
  }

  return (
    <div className="card">
      <div className="search">
        <input
          onChange={itemSaved}
          type="text"
          value={location}
          className="search-bar"
          placeholder="City Name"
        />
        <button onClick={displayWeather} className="search-icon">
          <SearchButton value={createLocation} />
        </button>
      </div>
      <div className="info">
        <WeatherDet place={createLocation} />
      </div>
    </div>
  );
}
export default Card;

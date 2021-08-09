import React, { useState } from "react";
import SearchButton from "./SearchButton";
import WeatherDet from "./WeatherDet";
import DropDown from "./DropDown";

function Card() {
  const [location, setLocation] = useState("");
  function itemSaved(event) {
    const newItemValue = event.target.value;
    setLocation(newItemValue);
  }

  const [unit, setUnit] = useState("metric");
  function settingUnit(unit) {
    setUnit(unit);
  }

  const [createLocation, setCreateLocation] = useState(["mumbai", "metric"]);
  function displayWeather() {
    setCreateLocation(() => {
      return [location, unit];
    });
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
      <DropDown getUnit={settingUnit} />
      <div className="info">
        <WeatherDet place={createLocation} />
      </div>
    </div>
  );
}
export default Card;

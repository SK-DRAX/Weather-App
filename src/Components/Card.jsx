import React from "react";
import SearchButton from "./SearchButton";

function Card() {
  return (
    <div className="card">
      <div className="search">
        <input type="text" className="search-bar" />
        <SearchButton />
      </div>
      <div className="info">
        <h2>Mumbai</h2>
        <h1>40 °C</h1>
      </div>
    </div>
  );
}
export default Card;

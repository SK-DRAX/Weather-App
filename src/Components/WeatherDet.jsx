import React, { useState } from "react";

function WeatherDet() {
  // let apiKey = "daa2f095b0e458fd463d236f75e52a87";
  // var fullDetails =

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function fetchData() {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=daa2f095b0e458fd463d236f75e52a87"
    )
      .then((resp) => (resp = resp.json()))
      .then((result) => {
        setLoaded(true);
        setItems(result);
      });
  }
  console.log(items);
  return <h1> </h1>;
}
export default WeatherDet;

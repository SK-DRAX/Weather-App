import React, { useState, useEffect } from "react";

function WeatherDet(props) {
  // var fullDetails ="api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=daa2f095b0e458fd463d236f75e52a87"

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        props.place[0] +
        "&units=" +
        props.place[1] +
        "&appid=daa2f095b0e458fd463d236f75e52a87"
    )
      .then((res) => res.json())
      .then((result) => {
        setLoaded(false);
        setItems(result);
      });
  }, [props.place]);
  const { name, main } = items;
  var unimet = " °C";
  if (props.place[1] === "imperial") {
    unimet = " °F";
  }
  return (
    <div>
      <h2>{name}</h2>
      <h1>{main?.temp + unimet}</h1>
    </div>
  );
}
export default WeatherDet;

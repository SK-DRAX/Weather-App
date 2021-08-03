import React, { useState, useEffect } from "react";

function WeatherDet() {
  // let apiKey = "daa2f095b0e458fd463d236f75e52a87";
  // var fullDetails ="api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=daa2f095b0e458fd463d236f75e52a87"

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=daa2f095b0e458fd463d236f75e52a87"
    )
      .then((res) => res.json())
      .then((result) => {
        setLoaded(false);
        setItems(result);
      });
  }, []);

  console.log(items);
  return <h1> </h1>;
}
export default WeatherDet;

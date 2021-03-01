import React, { useState } from "react";
import WeatherData from "./WeatherData"
import axios from "axios"
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity)
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    let apiKey = "976b89f445ce6f533868a11eba113753";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="form-wrapper">
            <form onSubmit = {handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input type="text" placeholder="Enter a city..." className="enter-city" onChange={updateCity}/>
                </div>
                <div className="col-3">
                  <input type="submit" value="Search" className="search-btn" />
                </div>
              </div>
            </form> 
          </div>
          <WeatherData data={weatherData} />
        </div>
      </div>
    ); 
  } else {
    search();
    return "Loading results..."
  }
}
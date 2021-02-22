import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios"
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
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
      icon: "http://openweathermap.org/img/wn/10d@2x.png"
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="form-wrapper">
            <form>
              <div className="row">
                <div className="col-6">
                  <input type="text" placeholder="Enter a city..." className="enter-city"/>
                </div>
                <div className="col-3">
                  <input type="submit" value="Search" className="search-btn" />
                </div>
              </div>
            </form>
          </div>
          <div className="wrapper">
            <ul className="date">
              <li>
                {weatherData.city}
              </li>
              <FormattedDate date={weatherData.date} />
            </ul>       
            <div className="inner-wrapper">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <img className="weather-icon" src={weatherData.icon} alt="rain"></img>
                    </li>
                    <li className="description text-capitalize">
                      {weatherData.description}
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li className="temp">
                      {weatherData.temperature}
                      <span className="symbol">°</span>
                      <button className="units">C</button>
                      <span className="pipe-symbol">|</span>
                      <button className="units">F</button>
                    </li>
                    <li className="feels-like">
                      Feels like:{" "}{weatherData.feelsLike}°
                    </li>
                  </ul>
                </div>
              </div>
              <div className="emoji-wrapper">
                <div className="high-low">
                  <p>🌡</p>
                  <p>{weatherData.max}°/{weatherData.min}°</p>
                </div>
                <div className="humidity">
                  <p>💧</p>
                  <p>{weatherData.humidity}{" "}%</p>
                </div>
                <div className="wind">
                  <p>🌬</p>
                  <p>{weatherData.wind}{" "}km/h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="forecast-wrapper">
            <div>
              <p>Next 5 Days</p>
            </div>
            <div>
              <span>Friday</span>
              <span>45°/33°</span>
              <span>Showers</span>
            </div>
            <div>
              <span>Saturday</span>
              <span>50°/43°</span>
              <span>Sunny</span>
            </div>
            <div>
              <span>Sunday</span>
              <span>45°/33°</span>
              <span>Showers</span>
            </div>
            <div>
              <span>Monday</span>
              <span>45°/33°</span>
              <span>Partly Cloudy</span>
            </div>
            <div>
              <span>Tuesday</span>
              <span>45°/33°</span>
              <span>Partly Cloudy</span>
            </div>
          </div>
        </div>
      </div>
    );
    
  } else {
    let apiKey = "976b89f445ce6f533868a11eba113753";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading results..."
  }
}
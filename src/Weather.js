import React from "react";
import "./Weather.css";

export default function Weather() {
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
              Parma
            </li>
            <li>
              Friday, January 15, 2021
            </li>
            <li>
              10:14 A.M
            </li>
          </ul>       
          <div className="inner-wrapper">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="rain"></img>
                  </li>
                  <li>
                    rain
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="temp">
                    7
                    <span>°</span>
                    <button>C</button>
                    <span>|</span>
                    <button>F</button>
                  </li>
                  <li>
                    Feels like: 5°
                  </li>
                </ul>
              </div>
            </div>
            <div className="emoji-wrapper">
              <div className="high-low">
                <p>🌡</p>
                <p>8°/4°</p>
              </div>
              <div className="humidity">
                <p>💧</p>
                <p>100%</p>
              </div>
              <div className="wind">
                <p>🌬</p>
                <p>8 km/h</p>
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
}
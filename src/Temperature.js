import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        {props.celsius}
        <span className="symbol">°</span>
        <button className="units">C</button>
        <span className="pipe-symbol">|</span>
        <button className="units" onClick={displayFahrenheit}>F</button>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        {Math.round(fahrenheit)}
        <span className="symbol">°</span>
        <button className="units"onClick={displayCelsius}>C</button>
        <span className="pipe-symbol">|</span>
        <button className="units">F</button>
      </div>
    );
  }
}

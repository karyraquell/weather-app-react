import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
	return (
		<div>
			<div className="wrapper">
				<ul className="date">
					<li>
						{props.data.city}
					</li>
					<FormattedDate date={props.data.date} />
				</ul>       
				<div className="inner-wrapper">
					<div className="row">
						<div className="col-6">
							<ul>
								<li className="weather-icon">
									<WeatherIcon code={props.data.icon}/>
								</li>
								<li className="description text-capitalize">
									{props.data.description}
								</li>
							</ul>
						</div>
						<div className="col-6">
							<ul>
								<li className="temp">
									{props.data.temperature}
									<span className="symbol">°</span>
									<button className="units">C</button>
									<span className="pipe-symbol">|</span>
									<button className="units">F</button>
								</li>
								<li className="feels-like">
									Feels like:{" "}{props.data.feelsLike}°
								</li>
							</ul>
						</div>
					</div>
					<div className="emoji-wrapper">
						<div className="high-low">
							<p>🌡</p>
							<p>{props.data.max}°/{props.data.min}°</p>
						</div>
						<div className="humidity">
							<p>💧</p>
							<p>{props.data.humidity}{" "}%</p>
						</div>
						<div className="wind">
							<p>🌬</p>
							<p>{props.data.wind}{" "}km/h</p>
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
  );
}
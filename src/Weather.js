import React from "react";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="container">
                <div className="form-wrapper">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" placeholder="Enter a city..." className="w-100"/>
                            </div>
                            <div className="col-3">
                                <input type="submit" value="Search" className="w-100" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="wrapper">
                    <ul>
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
                </div>
                <div className="inner-wrapper">
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    dfw
                                </li>
                                <li>
                                    rain
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    7°C|F
                                </li>
                                <li>
                                    Feels like: 5°
                                </li>
                            </ul>
                        </div>
                    </div>
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
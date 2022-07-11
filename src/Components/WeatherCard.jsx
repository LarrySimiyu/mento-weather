import React from "react";
import { weatherImages } from "../FormatStrings/weatherImageFormat";

const WeatherCard = ({ temp, max, min, icon, sunrise, sunset, city }) => {
  const getSunrise = () => {
    var date = new Date(sunrise * 1000);
    var timestr = date.toLocaleTimeString();
    return <div>{timestr}</div>;
  };

  const getSunset = () => {
    var date = new Date(sunset * 1000);
    var timestr = date.toLocaleTimeString();
    return <div>{timestr}</div>;
  };

  return (
    <div className="cardContainer">
      <div className="cityName">{city}</div>
      <div className="tempData">
        <div className="tempContainer">
          {" "}
          {Math.ceil(temp)} <span>&#176;</span>
        </div>

        <div className="weatherIcon">
          <img
            src={weatherImages.get(icon)}
            alt="weather icon"
            className="tempImage"
          />
        </div>
      </div>
      <div className="detailsContainer">
        <div className="minMaxContainer">
          <div className="min">
            Min: {Math.ceil(min)} <span>&#176;</span>
          </div>

          <div className="max">
            Max: {Math.ceil(max)} <span>&#176;</span>
          </div>
        </div>
        <div className="sunriseSunsetContainer">
          <div className="sunriseContainer">
            <img src="sunrise.png" className="sunrise" alt="sunrise" />
            {getSunrise()}
          </div>
          <div className="sunsetContainer">
            {" "}
            <img src="sunset.png" className="sunset" alt="sunset" />{" "}
            <div>{getSunset()}</div>
          </div>
        </div>
      </div>

      {/* <button onClick={getSunrise}>click</button> */}
    </div>
  );
};

export { WeatherCard };

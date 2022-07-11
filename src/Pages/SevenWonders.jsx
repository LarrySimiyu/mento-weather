import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import { WeatherCard } from "../Components/WeatherCard";

import axios from "axios";

const SevenWonders = () => {
  const [weatherData, setWeatherData] = useState();
  const [popularZip, setPopularZip] = useState();

  const zipCodes = [
    85001, 88901, 85641, 92501, 78015, 33101, 77001, 93650, 75001, 32789,
  ];

  const generateCity = () => {
    const zipCode = zipCodes[(zipCodes.length * Math.random()) | 0];
    fetchZipCodeWeather(zipCode).then((response) => {
      setWeatherData(response);
    });
  };

  const fetchZipCodeWeather = (zip) => {
    return axios
      .get("http://localhost:3001/zipcode", {
        params: {
          zip,
        },
      })
      .then(({ data }) => {
        return data;
      });
  };

  useEffect(() => {
    const zipCode = zipCodes[(zipCodes.length * Math.random()) | 0];

    fetchZipCodeWeather(zipCode).then((response) => {
      console.log(response);
      setWeatherData(response);
    });

    console.log("MOUNTED");
    return () => console.log("UNMOUNTED");
  }, []);

  if (weatherData === undefined) {
    return <div>not loaded yet </div>;
  } else {
    return (
      <div className="pageContainer">
        <WeatherCard
          temp={weatherData.main.temp}
          max={weatherData.main.temp_max}
          min={weatherData.main.temp_min}
          clouds={weatherData.clouds.all}
          sunrise={weatherData.sys.sunrise}
          sunset={weatherData.sys.sunset}
          city={weatherData.name}
          icon={weatherData.weather[0].description}
        />
      </div>
    );
  }
};

export { SevenWonders };
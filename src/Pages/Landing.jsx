import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherCard } from "../Components/WeatherCard";
import { TextField, Button } from "@material-ui/core";

const Landing = () => {
  const [weatherData, setWeatherData] = useState({});
  const [zip, setZip] = useState();

  const fetchLocalWeather = () => {
    return axios.get("http://localhost:3001/").then(({ data }) => {
      return data;
    });
  };

  const handleZipCodeInput = (event) => {
    setZip(event.target.value);
  };

  const fetchZipCodeWeather = () => {
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

  const handleZipSubmission = (event) => {
    event.preventDefault();
    fetchZipCodeWeather().then((response) => {
      setWeatherData(response);
    });

    setZip("");
  };

  useEffect(() => {
    if (Object.keys(weatherData).length === 0) {
      fetchLocalWeather().then((response) => {
        setWeatherData(response);
      });
    }
  }, [weatherData]);

  if (weatherData.main === undefined) {
    return (
      <div className="pageContainer">
        <img src="sunny.png" alt="SUN" className="sunLoading" />
        <div className="loadingMessage">Loading Weather</div>
      </div>
    );
  } else {
    return (
      <div className="pageContainer">
        <div className="inputContainer">
          <TextField
            id="standard-basic"
            label="enter a zipcode"
            variant="standard"
            onChange={handleZipCodeInput}
            value={zip}
            size="medium"
            InputProps={{ disableUnderline: true, type: "number" }}
          />

          <Button
            variant="contained"
            onClick={handleZipSubmission}
            style={{
              color: "black",
              backgroundColor: " white",
              border: "1px solid black",
            }}
          >
            Search
          </Button>
        </div>

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

export { Landing };

// 94118

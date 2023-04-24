/* eslint-disable */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";
import CityNotFound from "./components/notFound";
function App() {

  const [weatherData, setWeatherData] = useState({});
  const [hasError, setError] = useState(false);
  const [city, setCity] = useState("New Delhi");
  const [doesStateChanged, changeState] = useState(false);

  document.onkeydown = (event) => {
    if(event.key === "Enter")
    onClickHandeler();
  }


  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d2e45462759bfd80250464f44fba4483&&units=metric";
  useEffect(() => {
    if(city === "")
    return;
    async function fun() {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    fun().then(data => {
      console.log(data);
      if (data.cod === '404') {
        setError(true);
      }
      else {
        setError(false);
        setWeatherData(prevData => {
          const currData = {};
          currData.city = data.name;
          currData.countryCode = data.sys.country;
          currData.description = data.weather[0].description.toUpperCase();
          currData.temperature = data.main.temp;
          currData.humidity = data.main.humidity;
          currData.iconCode = data.weather[0].icon;
          currData.visibility = data.visibility / 1000;
          currData.feelsLike = data.main.feels_like;
          currData.clouds = data.clouds.all;
          return currData;
        })
      }
    })
  }, [doesStateChanged]);

  function onChangeHandeler(event) {
    setCity(event.target.value);
  }

  function onClickHandeler() {
    changeState(prevData => !prevData);
  }

  return (
    <div>
      <h1>Weather forecaster</h1>
      <Navbar
        onInputChange={onChangeHandeler}
        onButtonClick={onClickHandeler}
      />
      {
        hasError === false  ? <WeatherInfo
          city={weatherData.city}
          countryCode={weatherData.countryCode}
          description={weatherData.description}
          temperature={weatherData.temperature}
          humidity={weatherData.humidity}
          iconCode={weatherData.iconCode}
          visibility={weatherData.visibility}
          feelsLike={weatherData.feelsLike}
          clouds={weatherData.clouds}

        /> : <CityNotFound/>}
    </div>
  );
}

export default App;



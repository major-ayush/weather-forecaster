import React from "react";

function WeatherInfo(props)
{
   
    
    const iconUrl = "https://openweathermap.org/img/wn/" + props.iconCode +  "@2x.png";
    return (
        <div className="forecastBox">
            <h2>{props.city}/{props.countryCode}</h2>
            <h2>{props.description}</h2>
            <img src = {iconUrl} alt = "weather icon"/>
            <h2>Temperature : {props.temperature} &#8451;</h2>
            <h2>Feels Like : {props.feelsLike} &#8451;</h2>
            <h2>Humidity : {props.humidity}%</h2>
            <h2>Visibility : {props.visibility} Km</h2>
            <h2>Clouds : {props.clouds}%</h2>
        </div>
    );
}

export default WeatherInfo; 
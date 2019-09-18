import React from 'react';
import './Weather.css';
const Weather = (props) => {
    const {temperature,city,country,humidity,description,error} = props
    return (
        <div id="weather">
            {temperature && <p>Temperature: {temperature}</p>}
            {city && <p>City: {city}</p>}
            {country && <p>Country: {country}</p>}
            {humidity && <p>Humidity: {humidity}</p>}
            {description && <p>Condition: {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}


export default Weather;


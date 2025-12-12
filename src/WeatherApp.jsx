import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import './WeatherApp.css';
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="weather-app">
            <h2>Weather App</h2>
            <SearchBox updateWeatherInfo={updateWeatherInfo} />

            {weatherInfo ? (
                <InfoBox info={weatherInfo} />
            ) : (
                <div className="welcome-box">
                    <h3>Search for any city to get started 🌍</h3>
                    <p>Type a city name above and see weather details instantly.</p>
                </div>
            )}
        </div>
    );
}

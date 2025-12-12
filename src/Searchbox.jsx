import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
export default function SearchBox({ updateWeatherInfo }) {
    const API_URL = import.meta.env.VITE_API_URL;
    const key = import.meta.env.VITE_API_KEY;

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("Submitted City: ", city);
            let info = await getWeather();
            setCity("");
            updateWeatherInfo(info);
        }
        catch (err) {
            setError(true);
        }
    }

    let getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${key}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message || "City not found");
            }

            let result = {
                city: jsonResponse.name,
                temperature: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weatherType: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    };

    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="outlined" type="submit">SUBMIT</Button>
                {error && <p style={{ color: "red" }}> No such place in API!</p>}
            </form>
        </div>

    );
}
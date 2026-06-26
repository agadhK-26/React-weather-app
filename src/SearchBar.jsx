import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBar.css";

export default function SearchBar({ updateInfo }) {
  const api_key = import.meta.env.VITE_API_KEY;

  const geoUrl = "https://api.openweathermap.org/geo/1.0/direct";
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

  const [city, setCity] = useState("");

  const apiCall = async () => {
    try {
      // Get latitude and longitude
      const geoResponse = await fetch(
        `${geoUrl}?q=${city}&limit=1&appid=${api_key}`
      );

      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        throw new Error("City not found");
      }

      const { lat, lon } = geoData[0];

      // Get weather details
      const weatherResponse = await fetch(
        `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
      );

      const jsonResponse = await weatherResponse.json();

      // Store required data in an object
      const result = {
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        temp: jsonResponse.main.temp,
        feelsLike: jsonResponse.main.feels_like,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].main,
        description: jsonResponse.weather[0].description,
        windSpeed: jsonResponse.wind.speed,
        visibility: jsonResponse.visibility,
      };

      console.log(result);

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const citySearch = (event) => {
    setCity(event.target.value);
  };

  const formAction = async (event) => {
    event.preventDefault();

    if (!city.trim()) return;

    const weatherInfo = await apiCall();

updateInfo(weatherInfo);

setCity("");
  };

  return (
    <div className="searchBar">
      <h1>Search Location</h1>

      <form onSubmit={formAction}>
        <TextField
          id="Search"
          label="Search"
          variant="outlined"
          value={city}
          onChange={citySearch}
        />

        <br />
        <br />

        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
import "./WeatherCard.css";
import {weatherOptions,defaultWeatherOptions,} from "../../utils/constants.js";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData) {
    return (
      <section className="weather-card">
        <p className="weather-card__temp">Weather unavailable</p>
      </section>
    );
  }

  const weatherOption = weatherOptions.find(
    (option) =>
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
  );

  const fallbackOption =
    defaultWeatherOptions[weatherData.isDay ? "day" : "night"];

  const selectedOption = weatherOption || fallbackOption;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {Math.round(currentTemperatureUnit === "F" ? 
          weatherData.temp.F : weatherData.temp.C)} &deg;{currentTemperatureUnit}
      </p>

      <img
        className="weather-card__image"
        src={selectedOption.url}
        alt={`${selectedOption.day ? "Day" : "Night"} ${
          selectedOption.condition
        } weather`}
      />
    </section>
  );
}

export default WeatherCard;
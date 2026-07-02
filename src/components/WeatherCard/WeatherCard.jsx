import "./WeatherCard.css";

function WeatherCard({ temperature, error }) {
  if (error) {
    return (
      <section className="weather-card">
        <p className="weather-card__error">⚠️ Weather unavailable</p>
      </section>
    );
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperature !== null ? `${temperature}°F` : "Loading weather..."}
      </p>
    </section>
  );
}

export default WeatherCard;
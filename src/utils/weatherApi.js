const API_KEY = "63de9722b2e480ece301c6e2acdd9747";

export async function getWeather(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Error fetching weather");
  }

  return res.json();
}
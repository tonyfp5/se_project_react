import { useEffect, useState } from "react";

export function useWeather() {
  const [temperature, setTemperature] = useState(72);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTemperature(72);
    setError(null);
  }, []);

  return { temperature, error };
}
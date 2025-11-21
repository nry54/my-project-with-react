import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = () => {
  const { weatherData } = useTheme();

  const isDay = () => {
    if (!weatherData || !weatherData.current) return false;
    return weatherData.current.is_day === 1;
  };

  // Get weather condition text from weather data
  const getWeatherCondition = () => {
    if (!weatherData || !weatherData.current) return "Unknown";
    return weatherData.current.condition.text;
  };

  // Get location from weather data
  const getLocation = () => {
    if (!weatherData || !weatherData.location) return "Unknown Location";
    return `${weatherData.location.name}, ${weatherData.location.country}`;
  };

  // Get weather icon from weather data
  const getWeatherIcon = () => {
    if (!weatherData || !weatherData.current) return null;
    return weatherData.current.condition.icon;
  };

  return (
    <div className="weather-widget">
      {getWeatherIcon() && (
        <img
          src={getWeatherIcon()}
          alt={getWeatherCondition()}
          style={{ width: "50px", height: "50px" }}
        />
      )}

      <p className="location">{getLocation()}</p>
      <p className="weather-condition">
        {isDay() ? getWeatherCondition() : "Night"}
      </p>
    </div>
  );
};

export default ThemeSwitcher;

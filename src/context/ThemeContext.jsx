/** Context oluşturma işlemleri burada yapılır */
import { createContext, useState, useEffect } from "react";
import { WEATHER_API_CONFIG } from "../config.js";

const ThemeContext = createContext(); /* Context Nesnesini Oluşturduk */

/** Provider Bileşenini (Veriyi Sağlayan) Oluşturduk  */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get user's current location
  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by this browser."));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(`${position.coords.latitude},${position.coords.longitude}`);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  useEffect(() => {
    // fetch api ile hava durumu verisi çekme
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Get user's current location
        const location = await getUserLocation();

        const response = await fetch(
          `${WEATHER_API_CONFIG.BASE_URL}${WEATHER_API_CONFIG.CURRENT_ENDPOINT}?key=${WEATHER_API_CONFIG.API_KEY}&q=${location}`
        );

        if (!response.ok) {
          throw new Error(
            `Weather API request failed with status ${response.status}`
          );
        }

        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(error.message);
        // Fallback to Istanbul if location access fails
        try {
          const fallbackResponse = await fetch(
            `${WEATHER_API_CONFIG.BASE_URL}${WEATHER_API_CONFIG.CURRENT_ENDPOINT}?key=${WEATHER_API_CONFIG.API_KEY}&q=Istanbul`
          );
          const fallbackData = await fallbackResponse.json();
          setWeatherData(fallbackData);
        } catch (fallbackError) {
          console.error("Error fetching fallback weather data:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  /** Kullanıcının seçimi local storage'a kaydedilir - // Hem başlangıçta (mount) hem de 'theme' değeri her değiştiğinde çalışır.  */
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = { theme, setTheme, weatherData, loading, error };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

/** Context oluşturma işlemleri burada yapılır */
import { createContext, useState, useEffect } from "react";
import { WEATHER_API_CONFIG } from "../config.js";

const ThemeContext = createContext(); /* Context Nesnesini Oluşturduk */

/** Provider Bileşenini (Veriyi Sağlayan) Oluşturduk  */
export const ThemeProvider = ({ children }) => {
  const [theme, fetchWeatherData] =
    useState("light"); /** Kullanıcı seçimi varsa onu al, yoksa light */

  useEffect(() => {
    // fetch api ile hava durumu verisi çekme
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `${WEATHER_API_CONFIG.BASE_URL}${WEATHER_API_CONFIG.CURRENT_ENDPOINT}?key=${WEATHER_API_CONFIG.API_KEY}&q=Istanbul`
        );
        const data = await response.json();
        console.log(data);
        // setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, []);

  const values = { theme, fetchWeatherData };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

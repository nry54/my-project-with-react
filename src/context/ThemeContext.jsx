/** Context oluşturma işlemleri burada yapılır */
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext(); /* Context Nesnesini Oluşturduk */

/** Provider Bileşenini (Veriyi Sağlayan) Oluşturduk  */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  ); /** Kullanıcı seçimi varsa onu al, yoksa light */

  /** Kullanıcının seçimi local storage'a kaydedilir - // Hem başlangıçta (mount) hem de 'theme' değeri her değiştiğinde çalışır.  */
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const values = { theme, setTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;

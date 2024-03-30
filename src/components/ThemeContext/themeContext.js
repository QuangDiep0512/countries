import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeHeader, setThemeHeader] = useState("lightTheme");
  const [themeContent, setThemeContent] = useState("lightThemeContent");

  const toggleTheme = () => {
    setThemeHeader(themeHeader === "darkTheme" ? "lightTheme" : "darkTheme");
    setThemeContent(
      themeContent === "darkTheme" ? "lightThemeContent" : "darkTheme"
    );
  };

  return (
    <ThemeContext.Provider value={{ themeHeader, themeContent, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

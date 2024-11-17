/************************
 * Made by [MR Ferry™]  *
 * on November 2024     *
 ************************/

import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      document.body.classList.toggle("dark-mode");
      const newMode = !prevMode;
      localStorage.setItem("darkMode", String(newMode)); // Save preference
      return newMode;
    });
  };
  return (
    <button className="dark-mode-toggle" id="darkModeToggle"
            onClick={toggleDarkMode}>{darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}</button>
  );
};

export default DarkModeToggle;
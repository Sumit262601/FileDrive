import React from 'react'
import { useEffect, useState } from "react";
import { FaSun, FaRegMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {  
    return localStorage.getItem("darkMode") !== "false";
  });

  useEffect(() => {
    const darkModeClass = "dark";
    if (isDarkMode) {
      document.documentElement.classList.add(darkModeClass);
    } else {
      document.documentElement.classList.remove(darkModeClass);
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="px-4 text-xl">
      {isDarkMode ? <FaSun /> : <FaRegMoon />}
    </button>
  );
};

export default DarkModeToggle;
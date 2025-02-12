import React from 'react'
import { useEffect, useState } from "react";
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import { Button } from '@/components/ui/button';


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
    <Button variant="outline" onClick={toggleDarkMode} size="icon">
      {isDarkMode ? <FaRegMoon /> : <FiSun />}
    </Button>
  );
};

export default DarkModeToggle;
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeController = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const userPrefersDark = localStorage.getItem('darkMode') === 'true';

    const initialMode = userPrefersDark !== null ? userPrefersDark : systemPrefersDark;
    setIsDarkMode(initialMode);

    if (initialMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
 
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2   rounded-lg text-gray-800 dark:text-gray-200"
    >
      {isDarkMode ? <FaSun />  : <FaMoon />
      }
    </button>
  );
};

export default ThemeController;
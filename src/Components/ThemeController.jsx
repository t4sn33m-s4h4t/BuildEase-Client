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
      className="fixed bottom-4 left-4 z-50 p-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-lg 
      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 
      text-gray-800 dark:text-gray-200 flex items-center justify-center"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun className="w-6 h-6" />
      ) : (
        <FaMoon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeController;
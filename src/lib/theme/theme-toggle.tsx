'use client';

import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className='dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-black bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md'
    >
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;

'use client';

import Button from './button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button varient="ghost" onClick={toggleTheme} size="icon">
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ToggleMode;

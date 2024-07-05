'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // <Button varient="ghost" onClick={toggleTheme} size="icon">
    //   {theme === 'light' ? <Moon /> : <Sun />}
    // </Button>

    <motion.label
      className="swap swap-rotate "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <input
        type="checkbox"
        className="hidden theme-controller"
        value="synthwave"
        checked={theme !== 'light'}
        onChange={toggleTheme}
      />
      <Sun className="w-8 h-8 fill-current swap-off" />
      <Moon className="w-8 h-8 fill-current swap-on" />
    </motion.label>
  );
};

export default ToggleMode;

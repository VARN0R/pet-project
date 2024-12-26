import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: THEME;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  };

  return { theme, toggleTheme };
};

export default useTheme;

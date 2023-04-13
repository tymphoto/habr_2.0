import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCALSTORAGE_THEME_KEY } from '../../../const/localStorage';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme():UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.GRAY;
      break;
    case Theme.GRAY:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}

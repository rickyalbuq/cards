import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

import { DefaultTheme } from 'styled-components';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

type Props = {
  children: ReactNode;
};

type themeContextType = {
  handleTheme(theme?: string): void;
  themeSelected: DefaultTheme;
};

const themeContextDefaultValues: themeContextType = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleTheme: () => {},
  themeSelected: dark
};

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function ThemeProvider({ children }: Props) {
  const [themeSelected, setThemeSelected] = useState<DefaultTheme>(dark);

  const handleTheme = useCallback((theme: string) => {
    switch (theme) {
      case 'light':
        setThemeSelected(light);
        break;
      case 'dark':
        setThemeSelected(dark);
        break;
      default:
        setThemeSelected(dark);
    }
  }, []);

  const value = {
    handleTheme,
    themeSelected
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

/* Ineffective
  const [theme, setTheme] = useState<DefaultTheme>(dark);
  useLayoutEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e: Event) => {
        setTheme(e ? dark : light);
      });
  }, []);
*/

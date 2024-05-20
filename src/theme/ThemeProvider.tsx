import { ThemeProvider as BaseThemeProvider, createTheme } from '@mui/material';
import { FC, ReactElement, createContext, useMemo, useState } from 'react';

import { darkThemeTokens, lightThemeTokens } from './tokens';

type TTheme = 'light' | 'dark';

interface IThemeContext {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}

interface IThemeProviderProps {
  children: ReactElement | ReactElement[];
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<TTheme>(
    () => (localStorage.getItem('theme') as TTheme | null) ?? 'light'
  );

  const contextValue = useMemo(
    () => ({
      theme: currentTheme,
      setTheme: (theme: TTheme) => {
        setCurrentTheme(theme);
        localStorage.setItem('theme', theme);
      },
    }),
    [currentTheme]
  );

  const theme = useMemo(() => {
    switch (currentTheme) {
      case 'dark':
        return createTheme(darkThemeTokens);

      default:
        return createTheme(lightThemeTokens);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

import {
  ThemeProvider as BaseThemeProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material';
import { FC, ReactElement, createContext, useMemo, useState } from 'react';

type TTheme = 'light' | 'dark';

interface IThemeContext {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}

interface IThemeProviderProps {
  children: ReactElement | ReactElement[];
}

const tokensLight: ThemeOptions = {
  palette: {
    mode: 'light',
  },
};

const tokensDark: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
};

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
        return createTheme(tokensDark);

      default:
        return createTheme(tokensLight);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

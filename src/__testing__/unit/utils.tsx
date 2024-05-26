/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable react-refresh/only-export-components */
import CssBaseline from '@mui/material/CssBaseline';
import { configureStore } from '@reduxjs/toolkit';
import {
  render as rtlRender,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { RootState, rootReducer } from 'store';
import { ThemeProvider } from 'theme';

interface IWithChildrenProps {
  children: ReactElement;
}

interface IProvidersProps extends IWithChildrenProps {
  initialState: RootState;
}

export const Providers: FC<IProvidersProps> = ({ children, initialState }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  return (
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        <Router>{children}</Router>
      </ThemeProvider>
    </Provider>
  );
};

export const render = (
  component: ReactElement,
  initialState?: RootState,
  ...rtlRenderOptions
) => {
  const Wrapper: FC<IWithChildrenProps> = ({ children }) => (
    <Providers initialState={initialState}>{children}</Providers>
  );

  return rtlRender(component, {
    wrapper: Wrapper,
    ...rtlRenderOptions,
  });
};

export const renderHook = <P, R>(
  hook: (initialProps: P) => R,
  initialState?: RootState,
  ...rtlRenderHookOptions
) => {
  const Wrapper: FC<IWithChildrenProps> = ({ children }) => (
    <Providers initialState={initialState}>{children}</Providers>
  );

  return rtlRenderHook(hook, {
    wrapper: Wrapper,
    ...rtlRenderHookOptions,
  });
};

export * from '@testing-library/react';

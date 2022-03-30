import React from 'react';
import {
  Box,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material';
import { StoreContextProvider } from '../../context/StoreContext';
import { theme } from '../../styles/.';
import { Calendar } from '../Calendar/Calendar';

const inputGlobalStyles = () => (
  <GlobalStyles
    styles={{
      '*, *::after, *::before': {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto',
      },
    }}
  />
);

const App = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Calendar />
    </Box>
  );
};

const AppWithMui = () => {
  return (
    <StoreContextProvider>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          {inputGlobalStyles()}
          <App />
        </MUIThemeProvider>
      </StyledEngineProvider>
    </StoreContextProvider>
  );
};

export { AppWithMui };

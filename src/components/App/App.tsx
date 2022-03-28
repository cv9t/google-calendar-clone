import React, { FC } from 'react';
import { Box, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { Calendar } from '../Calendar/Calendar';
import { theme, inputGlobalStyles } from '../../styles/index';

const App: FC = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Calendar />
    </Box>
  );
};

const AppWithMui: FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        {inputGlobalStyles}
        <App />
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export { AppWithMui as App };

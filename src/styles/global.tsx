import React from 'react';
import { GlobalStyles } from '@mui/material';

const inputGlobalStyles = (
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

export { inputGlobalStyles };

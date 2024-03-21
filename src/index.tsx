import React from 'react';
import ReactDOM from 'react-dom';
import NightModeProvider from './context/NightModeProvider';
import ThemeProvider from './context/ThemeProvider';
import { config } from './routes/config';
import { RouterProvider } from 'react-router-dom';

import "./index.css"
ReactDOM.render(
  <React.StrictMode>
    <NightModeProvider>
      <ThemeProvider>
        <RouterProvider router={config} /> 
      </ThemeProvider>
    </NightModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';

import GlobalStyles from 'styles/globals';
import { Container } from 'styles/common';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ContextTheme, useTheme } from 'context/ThemeContext';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';

import Start from 'pages/Start';

const Routes: React.FC = () => {
  const { themeSelected } = useTheme();

  return (
    <ContextTheme>
      <ThemeProvider theme={themeSelected}>
        <GlobalStyles />
        <Container>
          <Router>
            <Switch>
              <Route path="" element={<Start />} />
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </ContextTheme>
  );
};

export default Routes;

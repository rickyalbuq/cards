import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';

import GlobalStyles from 'styles/globals';
import { Container } from 'styles/common';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ContextTheme, useTheme } from 'context/ThemeContext';

import Start from 'pages/Start';
import PlayerName from 'pages/PlayerName';
import CreateRoom from 'pages/CreateRoom';
import Rules from 'pages/Rules';
import LoadingRoom from 'pages/LoadingRoom';
import GiveUp from 'pages/GiveUp';
import ChooseRoom from 'pages/ChooseRoom';
import EndGame from 'pages/EndGame';

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
              <Route path="player" element={<PlayerName />} />
              <Route path="create" element={<CreateRoom />} />
              <Route path="rules" element={<Rules />} />
              <Route path="choose" element={<ChooseRoom />} />
              <Route path="room/:id/player" element={<PlayerName />} />
              <Route path="room/:id/score" element={<EndGame />} />
              <Route path="room/:id/giveup" element={<GiveUp />} />
              <Route path="room/:id/loading" element={<LoadingRoom />} />
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </ContextTheme>
  );
};

export default Routes;

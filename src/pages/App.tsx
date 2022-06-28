import React from 'react';
import Modal from 'components/Modal';

import GlobalStyles from 'styles/globals';
import { Container } from 'styles/common';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ContextTheme, useTheme } from 'context/ThemeContext';

function App() {
  const { themeSelected } = useTheme();

  return (
    <ContextTheme>
      <ThemeProvider theme={themeSelected}>
        <GlobalStyles />
        <Container>
          <Modal title="Cards against humanity." subtitle="by RickyAlbuq">
            test
          </Modal>
        </Container>
      </ThemeProvider>
    </ContextTheme>
  );
}

export default App;

import React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from 'styles/themes/dark';

type Props = {
  children: ReactNode;
};

const MockTheme = ({ children }: Props) => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};

export default MockTheme;

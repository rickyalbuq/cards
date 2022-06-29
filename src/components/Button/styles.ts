import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Cta = styled(Link)(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.sm};
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.bgHigh};
    text-align: center;
    color: ${theme.colors.txtMedium};
    line-height: ${theme.lineHeights.heading};
    &:hover {
      color: ${theme.colors.txtHigh};
    }
  `
);

export const Ghost = styled(Link)(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xs};
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.bgMedium};
    text-align: center;
    color: ${theme.colors.txtLow};
    line-height: ${theme.lineHeights.link};
    &:hover {
      color: ${theme.colors.txtMedium};
    }
  `
);

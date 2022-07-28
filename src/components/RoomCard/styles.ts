import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.bgMedium};
    padding: ${theme.spacings.sm} ${theme.spacings.md};
  `
);

export const InnerWrapper = styled.div(
  ({ theme }) => css`
    width: 50%;
    display: flex;
    gap: ${theme.spacings.xs};
    align-items: left;
    flex-direction: column;
    justify-content: space-between;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.txtMedium};
    svg {
      color: ${theme.colors.txtHigh};
      margin-right: ${theme.spacings.xs};
    }
  `
);

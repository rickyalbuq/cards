import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label(
  ({ theme }) => css`
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.paragraph};
  `
);

export const Input = styled.input.attrs(() => ({
  type: 'text'
}))(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.sm};
    margin-top: ${theme.spacings.xs};
    background: ${theme.colors.bgHigh};
    border: none;
    border-radius: ${theme.radius.sm};
    box-shadow: ${theme.shadows.input};
    text-align: center;
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.heading};
    color: ${theme.colors.txtMedium};
    &::placeholder {
      font-style: italic;
      font-family: 'Poppins', sans-serif;
      color: ${theme.colors.txtMedium};
    }
  `
);

import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    padding: 0;
    display: flex;
    align-items: flex-end;
    gap: ${theme.spacings.sm};
  `
);

export const Label = styled.label(
  ({ theme }) => css`
    width: 50%;
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.paragraph};
  `
);

export const Input = styled.input.attrs(() => ({
  type: 'number',
  required: true
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

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    & {
      -moz-appearance: textfield;
    }
  `
);

export const Btn = styled.button.attrs(() => ({
  type: 'button'
}))(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.sm};
    border: none;
    background: ${theme.colors.bgHigh};
    text-align: center;
    color: ${theme.colors.txtMedium};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.heading};
    &:hover {
      cursor: pointer;
      color: ${theme.colors.txtHigh};
    }
  `
);

export const BtnAdd = styled(Btn)(
  ({ theme }) => css`
    border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
  `
);

export const BtnSub = styled(Btn)(
  ({ theme }) => css`
    border-radius: ${theme.radius.sm} 0 0 ${theme.radius.sm};
  `
);

export const BtnWrapper = styled.div`
  display: flex;
  width: 50%;
  gap: 2px;
`;

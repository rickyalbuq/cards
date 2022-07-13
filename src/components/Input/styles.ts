import styled, { css } from 'styled-components';

export const InputWrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    input[type='text'],
    input[type='number'] {
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
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      & {
        -moz-appearance: textfield;
      }
    }

    & span {
      margin-top: ${theme.spacings.xs};
      font-size: ${theme.fontSizes.xxs};
      line-height: ${theme.lineHeights.heading};
      color: ${theme.colors.txtLow};
    }
  `
);

export const Label = styled.label(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.paragraph};
  `
);

export const Legend = styled.legend(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.paragraph};
  `
);

export const BtnGroupCenter = styled.div(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: ${theme.spacings.xs};

    input[type='radio']:checked,
    input[type='radio']:not(:checked) {
      position: absolute;
      left: -9999px;
      width: 0;
      height: 0;
      visibility: hidden;
    }

    input[type='radio']:checked + label,
    input[type='radio']:not(:checked) + label {
      height: 100%;
      width: 100%;
      padding: ${theme.spacings.sm};
      border: none;
      border-radius: 0;
      background: ${theme.colors.bgMedium};
      text-align: center;
      color: ${theme.colors.txtMedium};
      font-size: ${theme.fontSizes.sm};
      line-height: ${theme.lineHeights.heading};
      &:hover {
        cursor: pointer;
        background: ${theme.colors.bgHigh};
      }
    }
    input[type='radio']:checked + label {
      background: ${theme.colors.bgHigh};
    }
  `
);

export const BtnGroupLeft = styled(BtnGroupCenter)(
  ({ theme }) => css`
    input[type='radio']:checked + label,
    input[type='radio']:not(:checked) + label {
      border-radius: ${theme.radius.sm} 0 0 ${theme.radius.sm};
    }
  `
);

export const BtnGroupRight = styled(BtnGroupCenter)(
  ({ theme }) => css`
    input[type='radio']:checked + label,
    input[type='radio']:not(:checked) + label {
      border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
    }
  `
);

export const BtnGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

export const HorizontalFlex = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.sm};
  align-items: flex-end;
`;

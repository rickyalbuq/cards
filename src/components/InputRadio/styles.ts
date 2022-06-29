import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label(
  ({ theme }) => css`
    margin-bottom: ${theme.spacings.xs};
    color: ${theme.colors.txtHigh};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.paragraph};
  `
);

export const InnerWrapper = styled.div`
  display: flex;
`;

export const Btn = styled.button.attrs(() => ({
  type: 'button'
}))(
  ({ theme }) => css`
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
  `
);

export const BtnLeft = styled(Btn)(
  ({ theme }) => css`
    border-radius: ${theme.radius.sm} 0 0 ${theme.radius.sm};
  `
);

export const BtnRight = styled(Btn)(
  ({ theme }) => css`
    border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
  `
);

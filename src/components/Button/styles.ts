import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Cta = styled(Link)(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.sm};
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.bgMedium};
    text-align: center;
    color: ${theme.colors.txtMedium};
    line-height: ${theme.lineHeights.heading};
    &:hover {
      background: ${theme.colors.bgHigh};
    }
  `
);

export const Ghost = styled(Link)(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xs};
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.bgLow};
    text-align: center;
    color: ${theme.colors.txtLow};
    line-height: ${theme.lineHeights.link};
    &:hover {
      color: ${theme.colors.txtMedium};
    }
  `
);

export const Form = styled.button(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.sm};
    border: none;
    border-radius: ${theme.radius.sm};
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

export const BtnGroupCenter = styled.button.attrs(() => ({
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

export const BtnGroupLeft = styled(BtnGroupCenter)(
  ({ theme }) => css`
    border-radius: ${theme.radius.sm} 0 0 ${theme.radius.sm};
  `
);

export const BtnGroupRight = styled(BtnGroupCenter)(
  ({ theme }) => css`
    border-radius: 0 ${theme.radius.sm} ${theme.radius.sm} 0;
  `
);

export const BtnGroupWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

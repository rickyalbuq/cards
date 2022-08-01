import { FiUser } from 'react-icons/fi';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    gap: ${theme.spacings.sm};
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${theme.radius.sm};
    background: ${theme.colors.bgMedium};
    padding: ${theme.spacings.sm} ${theme.spacings.md};
  `
);

export const InnerHeader = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.txtMedium};
    svg {
      color: ${theme.colors.txtHigh};
      margin-right: ${theme.spacings.xs};
    }
  `
);

export const UserIcon = styled(FiUser)<{ userColor: string }>(
  ({ theme, userColor }) => {
    function iconColor() {
      switch (userColor) {
        case 'orange':
          return theme.colors.orange;
        case 'pink':
          return theme.colors.pink;
        case 'yellow':
          return theme.colors.yellow;
        case 'turquoise':
          return theme.colors.turquoise;
        default:
          return theme.colors.txtHigh;
      }
    }

    return css`
      color: ${iconColor()};
      margin-right: ${theme.spacings.xs};
    `;
  }
);

export const InnerWrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.txtMedium};
    p {
      margin-bottom: ${theme.spacings.xxs};
    }
    h2 {
      font-size: ${theme.fontSizes.sm};
      margin-bottom: ${theme.spacings.xs};
    }
  `
);

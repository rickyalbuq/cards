import styled, { css } from 'styled-components';
import SimpleBar from 'simplebar-react';
import { Form as Unform } from '@unform/web';

interface Props {
  maxsliderheight: number;
}

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: auto;
  gap: ${({ theme }) => theme.spacings.sm};
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.sm};
  margin-top: ${({ theme }) => theme.spacings.lg};
`;

export const VerticalSlider = styled(SimpleBar)<Props>(
  ({ theme, maxsliderheight }) => css`
    width: 100%;
    height: ${maxsliderheight}px;
    max-height: ${maxsliderheight}px;
    padding-right: ${theme.spacings.sm};

    .simplebar-content {
      > :not(:last-of-type) {
        margin-bottom: ${theme.spacings.sm};
      }

      > :last-of-type {
        margin-bottom: ${theme.spacings.xs};
      }
    }
  `
);

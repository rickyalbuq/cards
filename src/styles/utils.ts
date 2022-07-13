import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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

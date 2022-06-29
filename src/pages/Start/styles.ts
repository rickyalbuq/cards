import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.sm};
  align-items: flex-end;
`;

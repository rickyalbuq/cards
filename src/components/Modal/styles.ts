import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const Card = styled.div`
  width: 454px;
  padding: ${({ theme }) => theme.spacings.xxxl};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.colors.bgLow};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.txtHigh};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.txtLow};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.paragraph};

  padding-bottom: ${({ theme }) => theme.spacings.xxl};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm};
  width: 100%;
`;

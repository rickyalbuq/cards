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
  height: 583px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.xxxl};
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.colors.bgLow};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xs};
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

  & strong {
    font-weight: 700;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: auto;
  gap: ${({ theme }) => theme.spacings.sm};
`;

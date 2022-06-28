import React, { ReactNode } from 'react';
import * as S from './styles';

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const Modal: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.InnerWrapper>{children}</S.InnerWrapper>
      </S.Card>
    </S.Wrapper>
  );
};

export default Modal;

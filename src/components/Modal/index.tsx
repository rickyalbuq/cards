import React, { ReactNode } from 'react';
import * as S from './styles';

interface Props {
  title: string;
  subtitle: string;
  subNumber?: string;
  children?: ReactNode;
}

const Modal: React.FC<Props> = ({ title, subtitle, subNumber, children }) => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Subtitle>
            {subtitle}
            {subNumber && <strong> {subNumber} </strong>}
          </S.Subtitle>
        </S.Header>
        <S.InnerWrapper>{children}</S.InnerWrapper>
      </S.Card>
    </S.Wrapper>
  );
};

export default Modal;

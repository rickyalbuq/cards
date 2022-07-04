import React, { ReactNode } from 'react';
import * as S from './styles';

import Button from 'components/Button';

type Button = {
  toGo: string;
  label: string;
};

interface Props {
  title: string;
  subtitle: string;
  subNumber?: string;
  children?: ReactNode;
  btnCta?: Button;
  btnGhost?: Button;
}

const Modal: React.FC<Props> = ({
  title,
  subtitle,
  subNumber,
  children,
  btnCta,
  btnGhost
}) => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Header>
          <S.Title>{title}</S.Title>
          {subNumber ? (
            <S.Subtitle>
              {subtitle} <strong>{subNumber}</strong>
            </S.Subtitle>
          ) : (
            <S.Subtitle>{subtitle}</S.Subtitle>
          )}
        </S.Header>
        <S.InnerWrapper>{children}</S.InnerWrapper>

        {(btnCta || btnGhost) && (
          <S.btnBottom>
            {btnCta && (
              <Button type="cta" toGo={btnCta.toGo} label={btnCta.label} />
            )}
            {btnGhost && (
              <Button
                type="ghost"
                toGo={btnGhost.toGo}
                label={btnGhost.label}
              />
            )}
          </S.btnBottom>
        )}
      </S.Card>
    </S.Wrapper>
  );
};

export default Modal;

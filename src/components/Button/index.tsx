import React, { MouseEventHandler } from 'react';
import * as S from './styles';

interface Props {
  toGo?: string;
  label: string;
  type: 'cta' | 'ghost' | 'form';
  onClick?: MouseEventHandler;
}

const Button: React.FC<Props> = ({ toGo, label, type, onClick }) => {
  switch (type) {
    case 'cta':
      return <S.Cta to={toGo || ''}>{label}</S.Cta>;
    case 'ghost':
      return (
        <S.Ghost onClick={onClick} to={toGo || ''}>
          {label}
        </S.Ghost>
      );
    case 'form':
      return (
        <S.Form type="submit" onClick={onClick}>
          {label}
        </S.Form>
      );
    default:
      return null;
  }
};

export default Button;

import React from 'react';
import * as S from './styles';

interface Props {
  toGo: string;
  label: string;
  type: 'cta' | 'ghost';
}

const Button: React.FC<Props> = ({ toGo, label, type }) => {
  switch (type) {
    case 'cta':
      return <S.Cta to={toGo}>{label}</S.Cta>;
    case 'ghost':
      return <S.Ghost to={toGo}>{label}</S.Ghost>;
    default:
      return null;
  }
};

export default Button;

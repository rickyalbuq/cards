import React from 'react';
import * as S from './styles';

interface Props {
  label: string;
  placeholder?: string;
}

const InputText: React.FC<Props> = ({ label, placeholder }) => (
  <S.Wrapper>
    <S.Label>
      {label}
      <S.Input placeholder={placeholder} />
    </S.Label>
  </S.Wrapper>
);

export default InputText;

import React, { FormEvent } from 'react';
import * as S from './styles';

interface Props {
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<Props> = ({ label, type, placeholder, onChange }) => (
  <S.Wrapper>
    <S.Label htmlFor={label}>{label}</S.Label>
    <S.Input
      type={type || 'text'}
      id={label}
      placeholder={placeholder}
      onChange={onChange}
    />
  </S.Wrapper>
);

export default InputText;

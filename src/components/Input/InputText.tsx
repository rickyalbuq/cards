import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import * as S from './styles';

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function InputText({ label, name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      }
    });
  }, [fieldName, registerField]);

  return (
    <S.InputWrapper>
      {label && <S.Label htmlFor={fieldName}>{label}</S.Label>}
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        {...rest}
      />
      {error && <span>{error}</span>}
    </S.InputWrapper>
  );
}

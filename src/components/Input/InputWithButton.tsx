import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';
import Button from 'components/Button';

interface Props {
  name: string;
  label?: string;
  btnLabel: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function InputWithButton({
  name,
  label,
  btnLabel,
  ...rest
}: InputProps) {
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
      {label && <S.Label>{label}</S.Label>}
      <S.HorizontalFlex>
        <input
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        <Button type="form" label={btnLabel} />
      </S.HorizontalFlex>
      {error && <span>{error}</span>}
    </S.InputWrapper>
  );
}

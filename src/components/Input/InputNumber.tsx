import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';
import {
  BtnGroupLeft,
  BtnGroupRight,
  BtnGroupWrapper
} from 'components/Button/styles';

interface Props {
  name: string;
  label?: string;
  addOrSub: (value: number) => void;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export default function InputText({
  label,
  name,
  addOrSub,
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
          type="number"
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        <BtnGroupWrapper>
          <BtnGroupLeft onClick={() => addOrSub(-1)}> - </BtnGroupLeft>
          <BtnGroupRight onClick={() => addOrSub(1)}> + </BtnGroupRight>
        </BtnGroupWrapper>
      </S.HorizontalFlex>
      {error && <span>{error}</span>}
    </S.InputWrapper>
  );
}

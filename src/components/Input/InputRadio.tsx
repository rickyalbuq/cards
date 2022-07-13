import React, {
  useEffect,
  useRef,
  InputHTMLAttributes,
  RefObject
} from 'react';
import { useField } from '@unform/core';
import * as S from './styles';

type Option = {
  id: string;
  value: string;
  label: string;
};

interface Props {
  name: string;
  legend?: string;
  options: [Option, Option, ...Option[]];
}

type RefInputElement = RefObject<HTMLInputElement[]>;
type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export default function InputRadio({
  legend,
  name,
  options,
  ...rest
}: InputProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs: RefInputElement) => {
        return refs?.current?.find((input) => input?.checked)?.value || '';
      },
      setValue: (refs: RefInputElement, id: string) => {
        const inputRef = refs?.current?.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: RefInputElement) => {
        const inputRef = refs?.current?.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      }
    });
  }, [fieldName, registerField]);

  return (
    <S.InputWrapper>
      {legend && <S.Legend>{legend}</S.Legend>}
      <S.BtnGroupWrapper>
        {options &&
          options.map((option, index) => {
            if (index === 0) {
              return (
                <S.BtnGroupLeft key={`div-${option.id}`}>
                  <input
                    type="radio"
                    key={option.id}
                    id={option.id}
                    ref={(ref) => {
                      if (ref !== null) inputRefs.current[index] = ref;
                    }}
                    name={name}
                    defaultChecked={defaultValue?.includes(option.id)}
                    value={option.value}
                    {...rest}
                  />
                  <label key={`label-${option.id}`} htmlFor={option.id}>
                    {option.label}
                  </label>
                </S.BtnGroupLeft>
              );
            } else if (index === options.length - 1) {
              return (
                <S.BtnGroupRight key={`div-${option.id}`}>
                  <input
                    type="radio"
                    key={option.id}
                    id={option.id}
                    ref={(ref) => {
                      if (ref !== null) inputRefs.current[index] = ref;
                    }}
                    name={name}
                    defaultChecked={defaultValue?.includes(option.id)}
                    value={option.value}
                    {...rest}
                  />
                  <label key={`label-${option.id}`} htmlFor={option.id}>
                    {option.label}
                  </label>
                </S.BtnGroupRight>
              );
            } else {
              return (
                <S.BtnGroupCenter key={`div-${option.id}`}>
                  <input
                    type="radio"
                    key={option.id}
                    id={option.id}
                    ref={(ref) => {
                      if (ref !== null) inputRefs.current[index] = ref;
                    }}
                    name={name}
                    defaultChecked={defaultValue?.includes(option.id)}
                    value={option.value}
                    {...rest}
                  />
                  <label key={`label-${option.id}`} htmlFor={option.id}>
                    {option.label}
                  </label>
                </S.BtnGroupCenter>
              );
            }
          })}
      </S.BtnGroupWrapper>
      {error && <span>{error}</span>}
    </S.InputWrapper>
  );
}

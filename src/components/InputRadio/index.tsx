import React, { useState } from 'react';
import * as S from './styles';

interface Props {
  label: string;
  options: [string, string, ...string[]];
}

const InputRadio: React.FC<Props> = ({ label, options }) => {
  const [clickedID, setClickedID] = useState<number>(1);

  const handleClick = (i: number) => {
    setClickedID(i);
  };

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InnerWrapper>
        {options &&
          options.map((option: string, i: number) => {
            const isActive = i === clickedID;

            if (i === 0) {
              return (
                <S.BtnLeft
                  key={i}
                  onClick={() => handleClick(i)}
                  active={isActive}
                >
                  {option}
                </S.BtnLeft>
              );
            } else if (i === options.length - 1) {
              return (
                <S.BtnRight
                  key={i}
                  onClick={() => handleClick(i)}
                  active={isActive}
                >
                  {option}
                </S.BtnRight>
              );
            } else {
              return (
                <S.Btn key={i} onClick={() => handleClick(i)} active={isActive}>
                  {option}
                </S.Btn>
              );
            }
          })}
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default InputRadio;

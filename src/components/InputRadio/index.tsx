import { useTheme } from 'context/ThemeContext';
import React, { useState } from 'react';
import * as S from './styles';

type Style = {
  [prop: string]: string;
};

interface Props {
  label: string;
  options: [string, string, ...string[]];
}

const InputRadio: React.FC<Props> = ({ label, options }) => {
  const { themeSelected } = useTheme();
  const [clickedID, setClickedID] = useState<number>(0);

  const handleActiveStatus = (status: boolean): Style => {
    if (themeSelected.name === 'dark' && status) {
      return { background: '#3F424D' };
    } else if (themeSelected.name === 'dark' && !status) {
      return { background: '#282A31' };
    } else if (themeSelected.name === 'light' && status) {
      return { background: '#FAFAFA' };
    } else {
      return { background: '#EEEEEE' };
    }
  };

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InnerWrapper>
        {options &&
          options.map((option: string, i: number) => {
            if (i === 0) {
              return (
                <S.BtnLeft
                  key={i}
                  onClick={() => setClickedID(i)}
                  style={handleActiveStatus(i === clickedID)}
                >
                  {option}
                </S.BtnLeft>
              );
            } else if (i === options.length - 1) {
              return (
                <S.BtnRight
                  key={i}
                  onClick={() => setClickedID(i)}
                  style={handleActiveStatus(i === clickedID)}
                >
                  {option}
                </S.BtnRight>
              );
            } else {
              return (
                <S.Btn
                  key={i}
                  onClick={() => setClickedID(i)}
                  style={handleActiveStatus(i === clickedID)}
                >
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

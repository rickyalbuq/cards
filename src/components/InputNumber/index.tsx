import React, { ChangeEvent, useState } from 'react';
import * as S from './styles';

interface Props {
  label: string;
}

const InputNumber: React.FC<Props> = ({ label }) => {
  const [quantity, setQuantity] = useState<number>(10);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number((e.target as HTMLInputElement).value));
  };

  const addOrSub = (value: number): void => {
    let acc = Number(quantity);

    isNaN(value) ? (value = 1) : (acc += value);
    acc = Math.max(acc, 1);

    setQuantity(acc);
  };

  return (
    <S.Wrapper>
      <S.Label>
        {label}
        <S.Input onChange={handleChange} value={quantity} />
      </S.Label>
      <S.BtnWrapper>
        <S.BtnSub onClick={() => addOrSub(-1)}>-</S.BtnSub>
        <S.BtnAdd onClick={() => addOrSub(1)}>+</S.BtnAdd>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};

export default InputNumber;

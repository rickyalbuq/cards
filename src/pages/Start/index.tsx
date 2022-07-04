import React, { FormEvent, useState } from 'react';
import * as S from './styles';

import Modal from 'components/Modal';
import Button from 'components/Button';
import InputText from 'components/InputText';

const Start = () => {
  const [room, setRoom] = useState<number>(0);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const room = Number(e.currentTarget.value);

    room <= 99999 && room >= 10000 ? setRoom(room) : setRoom(0);
  };

  const handleURL = (room: number): string => {
    return room !== 0 ? `../room/${room}/player` : '/';
  };

  return (
    <Modal title="Cards against humanity." subtitle="by RickyAlbuq">
      <Button type="cta" toGo="player" label="Jogar" />
      <Button type="cta" toGo="create" label="Criar sala" />
      <S.Wrapper>
        <InputText
          onChange={handleChange}
          label="Ou entre em uma sala:"
          placeholder="00000"
          type="number"
        />
        <Button type="cta" toGo={handleURL(room)} label="Entrar" />
      </S.Wrapper>
      <Button type="cta" toGo="rules" label="Regras &#38; Sugestões" />
    </Modal>
  );
};

export default Start;

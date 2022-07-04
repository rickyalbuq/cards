import React from 'react';

import Modal from 'components/Modal';
import InputRadio from 'components/InputRadio';
import InputNumber from 'components/InputNumber';

const CreateRoom = () => {
  const min = 10000;
  const max = 99999;

  const room = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <Modal
      title="Criar sala."
      subtitle="Informe esse número ao seus colegas:"
      subNumber={`${room}`}
      btnCta={{ toGo: `../room/${room}/player`, label: 'Jogar' }}
      btnGhost={{ toGo: '..', label: 'Cancelar' }}
    >
      <InputNumber label="Pontos para vencer:" />
      <InputRadio label="Partida:" options={['Pública', 'Privada']} />
    </Modal>
  );
};

export default CreateRoom;

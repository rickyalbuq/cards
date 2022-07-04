import React from 'react';
//import * as S from './styles';

import Modal from 'components/Modal';

const ChooseRoom = () => (
  <Modal
    title="Escolha a sala."
    subtitle="Escolha uma sala para entrar na partida."
    btnGhost={{ toGo: '../player', label: 'Voltar' }}
  ></Modal>
);

export default ChooseRoom;

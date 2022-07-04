import React from 'react';

import Modal from 'components/Modal';

const EndGame = () => (
  <Modal
    title="Fim de jogo."
    subtitle="Esse é o resumo da sua última partida."
    btnCta={{ toGo: '../room/12345', label: 'Jogar novamente' }}
    btnGhost={{ toGo: '/', label: 'Sair' }}
  ></Modal>
);

export default EndGame;

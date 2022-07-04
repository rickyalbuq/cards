import React from 'react';

import Modal from 'components/Modal';

const GiveUp = () => (
  <Modal
    title="Desistir da partida."
    subtitle="Tem certeza que quer abandonar a partida?"
    btnCta={{ toGo: '../room/12345', label: 'Voltar ao jogo' }}
    btnGhost={{ toGo: '/', label: 'Sair' }}
  ></Modal>
);

export default GiveUp;

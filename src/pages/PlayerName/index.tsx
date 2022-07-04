import React from 'react';
import { useParams } from 'react-router';

import Modal from 'components/Modal';
import InputText from 'components/InputText';

const PlayerName = () => {
  const { id } = useParams();

  const handleURL = (id?: string): string => {
    return id ? `../room/${id}` : '../choose';
  };

  return (
    <Modal
      title="Jogar."
      subtitle="Insira um nome para que os outros jogadores possam te reconhecer."
      btnCta={{ toGo: handleURL(id), label: 'Jogar' }}
      btnGhost={{ toGo: '/', label: 'Cancelar' }}
    >
      <InputText label="Qual o seu nome:" placeholder="ex: Fulano" />
    </Modal>
  );
};

export default PlayerName;

import React from 'react';
import Modal from 'components/Modal';
import Button from 'components/Button';

const Start = () => (
  <Modal title="Cards against humanity." subtitle="by RickyAlbuq">
    <Button type="cta" toGo="a" label="Começar" />
    <Button type="ghost" toGo="a" label="Voltar" />
  </Modal>
);

export default Start;

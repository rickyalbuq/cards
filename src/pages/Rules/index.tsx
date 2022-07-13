import React from 'react';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { Footer } from 'styles/utils';

const Rules = () => (
  <Modal title="Regras &#38; Sugestões." subtitle="Em breve.">
    <Footer>
      <Button type="ghost" toGo="/" label="Voltar" />
    </Footer>
  </Modal>
);

export default Rules;

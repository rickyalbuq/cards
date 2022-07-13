import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { useDispatch } from 'react-redux';
import { enterRoom } from 'store/Game.store';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { InputWithButton } from 'components/Input';
import { Form } from '@unform/web';

interface RedirectPage {
  state: boolean;
  to: string;
}

interface Errors {
  [key: string]: string;
}

interface Data {
  room: string;
}

const Start = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);

  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  async function handleSubmit(data: Data) {
    try {
      const schema = Yup.object().shape({
        room: Yup.number().required('O campo é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});

      dispatch(enterRoom({ room: Number(data.room) }));

      setRedirect({
        state: true,
        to: `../room/${data.room}`
      });
    } catch (err) {
      const validationErrors: Errors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        formRef?.current?.setErrors(validationErrors);
      }
    }
  }

  if (redirect.state) {
    return <Navigate to={redirect.to} />;
  } else {
    return (
      <Modal title="Cards against humanity." subtitle="by RickyAlbuq">
        <Button type="cta" toGo="choose" label="Jogar" />
        <Button type="cta" toGo="create" label="Criar sala" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputWithButton
            name="room"
            type="number"
            placeholder="00000"
            btnLabel="Entrar"
            label="Ou entre em uma sala:"
          />
        </Form>
        <Button type="cta" toGo="rules" label="Regras &#38; Sugestões" />
      </Modal>
    );
  }
};

export default Start;

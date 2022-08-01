import React, { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { useDispatch } from 'react-redux';
import { createRoom } from 'store/Game.store';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { InputWithButton } from 'components/Input';
import { Form } from '@unform/web';

import { RedirectPage } from 'types/interfaces';
import { createPlayerByRoom } from 'store/Player.store';
import { SocketContext } from 'context/ConnectionContext';

interface Errors {
  [key: string]: string;
}

interface Data {
  roomId: string;
}

const Start = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const formRef = useRef<FormHandles>(null);
  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  async function handleSubmit(data: Data) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        roomId: Yup.number().required('O campo é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });

      socket.emit(
        'getRoomById',
        JSON.stringify({
          roomId: Number(data.roomId)
        })
      );

      socket.on('getRoomById', (response: string) => {
        const { payload } = JSON.parse(response);

        if (payload.message !== 'Room not exists') {
          dispatch(
            createRoom({
              roomId: Number(data.roomId),
              createdAt: payload.createdAt,
              isPrivate: payload.isPrivate,
              minMatches: payload.minMatches,
              currentMatch: payload.currentMatch
            })
          );

          dispatch(createPlayerByRoom({ playerId: payload.playerId }));

          setRedirect({
            state: true,
            to: `../room/${data.roomId}/player`
          });
        } else {
          formRef?.current?.setErrors({
            roomId: 'Sala não encontrada.'
          });
        }
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
            name="roomId"
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

import React, { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { useDispatch, useSelector } from 'react-redux';
import { createUsername } from 'store/Player.store';
import { Game } from 'store/Game.store';
import { RootState } from 'store';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { InputText } from 'components/Input';
import { Footer, Form } from 'styles/utils';
import { SocketContext } from 'context/ConnectionContext';

interface RedirectPage {
  state: boolean;
  to: string;
}

interface Data {
  username: string;
}

interface Errors {
  [key: string]: string;
}

const PlayerName = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const { room } = useSelector<RootState, Game>(({ game }) => game);

  const formRef = useRef<FormHandles>(null);

  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  async function handleSubmit(data: Data) {
    try {
      formRef?.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string()
          .max(20, 'No máximo 20 caracteres')
          .min(4, 'No mínino 4 caracteres')
          .required('O campo é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data);

      socket.emit(
        'connectPlayer',
        JSON.stringify({
          room,
          username: data.username
        })
      );

      socket.on('connectPlayer', (data: string) => {
        const { payload } = JSON.parse(data);

        if (payload.message === 'Username already exists') {
          formRef?.current?.setErrors({
            username: 'Esse nome de usuário já existe.'
          });
        } else if (payload.message === 'Room not exists') {
          setRedirect({
            state: true,
            to: `..`
          });
        } else if (payload.message === 'Connected successfully') {
          dispatch(
            createUsername({
              room,
              username: payload.username
            })
          );

          setRedirect({
            state: true,
            to: `../room/${room}`
          });
        } else {
          console.log(payload);
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
      <Modal
        title="Jogar."
        subtitle="Insira um nome para que os outros jogadores possam te reconhecer."
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputText
            name="username"
            placeholder="ex: Fulano"
            label="Qual o seu nome:"
          />
          <Footer>
            <Button type="form" label="Jogar" />
            <Button type="ghost" toGo=".." label="Cancelar" />
          </Footer>
        </Form>
      </Modal>
    );
  }
};

export default PlayerName;

import React, { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createRoom } from 'store/Game.store';
import { SocketContext } from 'context/ConnectionContext';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { InputNumber, InputRadio } from 'components/Input';
import { Footer, Form } from 'styles/utils';
import { createPlayerByRoom } from 'store/Player.store';
import { CreateRoomData, RedirectPage } from 'types/interfaces';

interface Errors {
  [key: string]: string;
}

interface Data {
  minMatches: number;
  isPrivate: 'public' | 'private';
}

const roomId = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

const CreateRoom = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const formRef = useRef<FormHandles>(null);
  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  const addOrSub = (value: number): void => {
    const input = formRef?.current;
    let acc = Number(input?.getFieldValue('minMatches'));

    acc += value;
    acc = Math.max(acc, 1);

    input?.setFieldValue('minMatches', `${acc}`);
  };

  async function handleSubmit(data: Data) {
    try {
      const schema = Yup.object().shape({
        minMatches: Yup.number()
          .max(30, 'No máximo 30 partidas')
          .min(5, 'No mínino 5 partidas')
          .required('O campo é obrigatório'),
        isPrivate: Yup.string().required('O campo é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current?.setErrors({});

      const isPrivate = data.isPrivate === 'private' ? true : false;

      socket.emit(
        'createRoom',
        JSON.stringify({
          roomId,
          isPrivate,
          minMatches: data.minMatches
        })
      );

      socket.on('createRoom', (response: string) => {
        const { payload }: CreateRoomData = JSON.parse(response);

        if (payload.message !== 'Room created successfully') {
          socket.emit(
            'createRoom',
            JSON.stringify({
              roomId,
              isPrivate,
              minMatches: data.minMatches
            })
          );
        } else {
          dispatch(
            createRoom({
              roomId,
              createdAt: payload.createdAt,
              isPrivate,
              minMatches: data.minMatches,
              currentMatch: 1
            })
          );
          dispatch(createPlayerByRoom({ playerId: payload.playerId }));

          socket.off('createRoom');
        }
      });

      setRedirect({
        state: true,
        to: `../room/${roomId}/player`
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
        title="Criar sala."
        subtitle="Informe esse número ao seus colegas:"
        subNumber={`${roomId}`}
      >
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            minMatches: 10,
            isPrivate: 'private'
          }}
        >
          <InputNumber
            name="minMatches"
            label="Pontos para vencer:"
            addOrSub={addOrSub}
          />
          <InputRadio
            name="isPrivate"
            legend="Partida:"
            options={[
              {
                id: 'public',
                value: 'public',
                label: 'Pública'
              },
              {
                id: 'private',
                value: 'private',
                label: 'Privada'
              }
            ]}
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

export default CreateRoom;

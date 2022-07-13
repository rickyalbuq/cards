import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import Modal from 'components/Modal';
import Button from 'components/Button';
import { InputNumber, InputRadio } from 'components/Input';
import { Footer, Form } from 'styles/utils';
import { createRoom } from 'store/Game.store';

interface RedirectPage {
  state: boolean;
  to: string;
}

interface Errors {
  [key: string]: string;
}

interface Data {
  maxMatches: number;
  isPrivate: 'public' | 'private';
}

const room = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

const CreateRoom = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  const addOrSub = (value: number): void => {
    const input = formRef?.current;
    let acc = Number(input?.getFieldValue('maxMatches'));

    acc += value;
    acc = Math.max(acc, 1);

    input?.setFieldValue('maxMatches', `${acc}`);
  };

  async function handleSubmit(data: Data) {
    try {
      const schema = Yup.object().shape({
        maxMatches: Yup.number()
          .max(30, 'No máximo 30 partidas')
          .min(5, 'No mínino 5 partidas')
          .required('O campo é obrigatório'),
        isPrivate: Yup.string().required('O campo é obrigatório')
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});

      const isPrivate = data.isPrivate === 'private' ? true : false;

      dispatch(
        createRoom({
          room,
          createdAt: new Date(),
          isPrivate,
          maxMatches: data.maxMatches,
          currentMatch: 0,
          messages: []
        })
      );

      setRedirect({
        state: true,
        to: `../room/${room}/player`
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
        subNumber={`${room}`}
      >
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            maxMatches: 10,
            isPrivate: 'private'
          }}
        >
          <InputNumber
            name="maxMatches"
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

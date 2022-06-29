import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputText from '.';

export default {
  title: 'InputText',
  component: InputText
} as ComponentMeta<typeof InputText>;

export const Default: ComponentStory<typeof InputText> = () => (
  <InputText label="Qual o seu nome:" placeholder="ex: Fulano" />
);

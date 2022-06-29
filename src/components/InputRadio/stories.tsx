import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputRadio from '.';

export default {
  title: 'InputRadio',
  component: InputRadio
} as ComponentMeta<typeof InputRadio>;

export const Default: ComponentStory<typeof InputRadio> = () => (
  <InputRadio label="Partida:" options={['Test', 'Test 2']} />
);

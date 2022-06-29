import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputNumber from '.';

export default {
  title: 'InputNumber',
  component: InputNumber
} as ComponentMeta<typeof InputNumber>;

export const Default: ComponentStory<typeof InputNumber> = () => (
  <InputNumber label="test" />
);

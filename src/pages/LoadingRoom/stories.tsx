import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingRoom from '.';

export default {
  title: 'LoadingRoom',
  component: LoadingRoom
} as ComponentMeta<typeof LoadingRoom>;

export const Default: ComponentStory<typeof LoadingRoom> = () => (
  <LoadingRoom />
);

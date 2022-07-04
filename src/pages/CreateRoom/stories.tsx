import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreateRoom from '.';

export default {
  title: 'CreateRoom',
  component: CreateRoom
} as ComponentMeta<typeof CreateRoom>;

export const Default: ComponentStory<typeof CreateRoom> = () => <CreateRoom />;

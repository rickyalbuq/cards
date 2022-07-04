import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ChooseRoom from '.';

export default {
  title: 'ChooseRoom',
  component: ChooseRoom
} as ComponentMeta<typeof ChooseRoom>;

export const Default: ComponentStory<typeof ChooseRoom> = () => <ChooseRoom />;

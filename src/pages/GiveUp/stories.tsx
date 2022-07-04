import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GiveUp from '.';

export default {
  title: 'GiveUp',
  component: GiveUp
} as ComponentMeta<typeof GiveUp>;

export const Default: ComponentStory<typeof GiveUp> = () => <GiveUp />;

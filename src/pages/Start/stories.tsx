import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Start from '.';

export default {
  title: 'Start',
  component: Start
} as ComponentMeta<typeof Start>;

export const Default: ComponentStory<typeof Start> = () => <Start />;

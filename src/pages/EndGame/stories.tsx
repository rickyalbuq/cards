import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EndGame from '.';

export default {
  title: 'EndGame',
  component: EndGame
} as ComponentMeta<typeof EndGame>;

export const Default: ComponentStory<typeof EndGame> = () => <EndGame />;

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlayerName from '.';

export default {
  title: 'PlayerName',
  component: PlayerName
} as ComponentMeta<typeof PlayerName>;

export const Default: ComponentStory<typeof PlayerName> = () => <PlayerName />;

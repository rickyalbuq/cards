import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Rules from '.';

export default {
  title: 'Rules',
  component: Rules
} as ComponentMeta<typeof Rules>;

export const Default: ComponentStory<typeof Rules> = () => <Rules />;

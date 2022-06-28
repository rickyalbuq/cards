import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '.';

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = () => (
  <Modal title="Test" subtitle="Test" />
);

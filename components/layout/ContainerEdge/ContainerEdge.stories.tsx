import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ContainerEdge } from './ContainerEdge';

export default {
  title: 'Layout/ContainerEdge',
  component: ContainerEdge,
  argTypes: {},
} satisfies Meta<typeof ContainerEdge>;

const Template: StoryFn<typeof ContainerEdge> = (args) => (
  <ContainerEdge {...args}>
    <div
      style={{ backgroundColor: 'grey', paddingBottom: '10%', width: '100%' }}
    ></div>
  </ContainerEdge>
);

export const Default = {
  render: Template,
  args: {},
};

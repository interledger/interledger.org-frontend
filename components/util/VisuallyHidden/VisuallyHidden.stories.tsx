import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {VisuallyHidden } from './VisuallyHidden';

export default {
  title: 'Util/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {}
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = (args) => <VisuallyHidden {...args} />;

export const Default = Template.bind({});
Default.args = {};

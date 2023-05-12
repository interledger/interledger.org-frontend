import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ButtonLink } from './ButtonLink';

export default {
  title: 'Ui/ButtonLink',
  component: ButtonLink,
  argTypes: {},
} satisfies Meta<typeof ButtonLink>;

export const Default = {
  args: {
    href: '/',
    children: 'Click me',
  },
};

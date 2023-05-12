import { Meta } from '@storybook/react';
import { MenuItem } from './MenuItem';

export default {
  title: 'Nav/MenuItem',
  component: MenuItem,
  argTypes: {},
} satisfies Meta<typeof MenuItem>;

export const Default = {
  args: {
    menuItem: {
      __typename: 'MenuItem' as const,
      title: 'Home',
      route: {
        __typename: 'RouteInternal' as const,
        url: '/',
        internal: true,
      },
      children: [],
    },
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { FooterMenu } from './FooterMenu';

const meta = {
  title: 'Nav/FooterMenu',
  component: FooterMenu,
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerMenu: {
      __typename: 'Menu' as const,
      items: [
        {
          __typename: 'MenuItem' as const,
          title: 'Home',
          route: {
            __typename: 'RouteInternal' as const,
            url: '/',
            internal: true,
          },
          children: [],
        },
        {
          __typename: 'MenuItem' as const,
          title: 'Page',
          route: {
            __typename: 'RouteInternal' as const,
            url: '/',
            internal: true,
          },
          children: [],
        },
      ],
    },
  },
};

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
      name: 'Footer Menu',
      items: [
        {
          __typename: 'MenuItem' as const,
          title: 'Home',
          url: '/',
        },
        {
          __typename: 'MenuItem' as const,
          title: 'Page',
          url: '/',
        },
      ],
    },
  },
};

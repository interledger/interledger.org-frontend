import { Meta, StoryObj } from '@storybook/react';
import { MainMenu } from './MainMenu';

const meta = {
  title: 'Nav/MainMenu',
  component: MainMenu,
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainMenu: {
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

import { Meta } from '@storybook/react';
import { MenuList } from './MenuList';

export default {
  title: 'Nav/MenuList',
  component: MenuList,
  argTypes: {},
} satisfies Meta<typeof MenuList>;

export const Default = {
  args: {
    menus: [],
  },
};

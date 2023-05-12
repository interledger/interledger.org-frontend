import { Meta, StoryObj } from '@storybook/react';
import { Main } from './Main';

const meta = {
  title: 'Layout/Main',
  component: Main,
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
};

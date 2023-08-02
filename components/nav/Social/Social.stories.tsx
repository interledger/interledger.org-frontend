import { Meta, StoryObj } from '@storybook/react';
import { Social } from './Social';

const meta = {
  title: 'Nav/Social',
  component: Social,
} satisfies Meta<typeof Social>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

import { Meta, StoryObj } from '@storybook/react';
import { Picture } from './Picture';

const meta = {
  title: 'Ui/Picture',
  component: Picture,
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

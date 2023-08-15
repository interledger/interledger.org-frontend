import { Meta, StoryObj } from '@storybook/react';
import { CardColumn } from './CardColumn';

const meta = {
  title: 'Layout/CardColumn',
  component: CardColumn,
} satisfies Meta<typeof CardColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

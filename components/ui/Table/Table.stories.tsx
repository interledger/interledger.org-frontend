import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
  title: 'Ui/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

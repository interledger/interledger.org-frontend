import { Meta, StoryObj } from '@storybook/react';
import { Duration } from './Duration';

const meta = {
  title: 'Ui/Duration',
  component: Duration,
} satisfies Meta<typeof Duration>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

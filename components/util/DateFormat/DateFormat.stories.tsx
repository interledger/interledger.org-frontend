import { Meta, StoryObj } from '@storybook/react';
import { DateFormat } from './DateFormat';

const meta = {
  title: 'Util/DateFormat',
  component: DateFormat,
} satisfies Meta<typeof DateFormat>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

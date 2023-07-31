import { Meta, StoryObj } from '@storybook/react';
import { TwoColumn } from './TwoColumn';

const meta = {
  title: 'Layout/TwoColumn',
  component: TwoColumn,
} satisfies Meta<typeof TwoColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

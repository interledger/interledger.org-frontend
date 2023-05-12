import { Meta, StoryObj } from '@storybook/react';
import { Paragraphs } from './Paragraphs';

const meta = {
  title: 'Layout/Paragraphs',
  component: Paragraphs,
} satisfies Meta<typeof Paragraphs>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     paragraphs,
//   },
// };

import { Meta, StoryObj } from '@storybook/react';
import { ParagraphImage } from './ParagraphImage';

const meta = {
  title: 'Paragraph/ParagraphImage',
  component: ParagraphImage,
} satisfies Meta<typeof ParagraphImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

import { Meta, StoryObj } from '@storybook/react';
import { ParagraphHighlightedList } from './ParagraphHighlightedList';

const meta = {
  title: 'Paragraph/ParagraphHighlightedList',
  component: ParagraphHighlightedList,
} satisfies Meta<typeof ParagraphHighlightedList>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

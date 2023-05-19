import { Meta, StoryObj } from '@storybook/react';
import { ParagraphVideo } from './ParagraphVideo';

const meta = {
  title: 'Paragraph/ParagraphVideo',
  component: ParagraphVideo,
} satisfies Meta<typeof ParagraphVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

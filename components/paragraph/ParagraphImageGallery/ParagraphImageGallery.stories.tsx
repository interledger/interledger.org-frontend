import { Meta, StoryObj } from '@storybook/react';
import { ParagraphImageGallery } from './ParagraphImageGallery';

const meta = {
  title: 'Paragraph/ParagraphImageGallery',
  component: ParagraphImageGallery,
} satisfies Meta<typeof ParagraphImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

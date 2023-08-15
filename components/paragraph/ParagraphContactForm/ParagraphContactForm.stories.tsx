import { Meta, StoryObj } from '@storybook/react';
import { ParagraphContactForm } from './ParagraphContactForm';

const meta = {
  title: 'Paragraph/ParagraphContactForm',
  component: ParagraphContactForm,
} satisfies Meta<typeof ParagraphContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

import { Meta, StoryObj } from '@storybook/react';
import { ParagraphButton } from './ParagraphButton';

const meta = {
  title: 'Paragraph/ParagraphButton',
  component: ParagraphButton,
  argTypes: {},
} satisfies Meta<typeof ParagraphButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    paragraph: {
      __typename: 'ParagraphButton',
      id: 'ParagraphButton',
      link: {
        url: '/',
        title: 'Click me',
      },
    },
  },
};

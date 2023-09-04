import { Meta, StoryObj } from '@storybook/react';
import { ParagraphSpacer } from './ParagraphSpacer';

const meta = {
  title: 'Paragraph/ParagraphSpacer',
  component: ParagraphSpacer,
} satisfies Meta<typeof ParagraphSpacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    paragraph: {
      __typename: 'ParagraphSpacer',
      id: '6c7b8d2d-ffde-4614-8c0a-0abe1b81e8c1',
      spacerSize: 'small',
    },
  },
};

export const WithDivider: Story = {
  args: {
    paragraph: {
      __typename: 'ParagraphSpacer',
      id: '6c7b8d2d-ffde-4614-8c0a-0abe1b81e8c1',
      spacerSize: 'small',
      spacerLine: true,
    },
  },
};

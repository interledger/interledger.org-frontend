import { Meta, StoryObj } from '@storybook/react';
import { ParagraphSpacer } from './ParagraphSpacer';
import { uniqueId } from 'lodash';

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
      id: uniqueId(),
      spacerSize: 'small',
    },
  },
};

export const WithDivider: Story = {
  args: {
    paragraph: {
      __typename: 'ParagraphSpacer',
      id: uniqueId(),
      spacerSize: 'small',
      spacerLine: true,
    },
  },
};

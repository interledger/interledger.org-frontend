import { Meta, StoryObj } from '@storybook/react';
import { NodeArticle } from './NodeArticle';

const meta = {
  title: 'Node/NodeArticle',
  component: NodeArticle,
  argTypes: {},
} satisfies Meta<typeof NodeArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    node: {
      __typename: 'NodeArticle',
      id: 'fsdgfdgsdfg',
      title: 'Article',
      path: '/',
      metatag: [
        {
          __typename: 'MetaTagValue',
          tag: 'title',
          attributes: {},
        },
      ],
    },
  },
};

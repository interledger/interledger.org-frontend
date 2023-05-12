import { Meta, StoryObj } from '@storybook/react';
import { NodePage } from './NodePage';

const meta = {
  title: 'Node/NodePage',
  component: NodePage,
  argTypes: {},
} satisfies Meta<typeof NodePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    node: {
      __typename: 'NodePage',
      id: 'fsdgfdgsdfg',
      title: 'Page',
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

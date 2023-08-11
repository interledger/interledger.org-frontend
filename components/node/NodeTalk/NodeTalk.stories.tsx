import { Meta, StoryObj } from '@storybook/react';
import { NodeTalk } from './NodeTalk';

const meta = {
  title: 'Node/NodeTalk',
  component: NodeTalk,
} satisfies Meta<typeof NodeTalk>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

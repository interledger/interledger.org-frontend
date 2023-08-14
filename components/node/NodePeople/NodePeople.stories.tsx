import { Meta, StoryObj } from '@storybook/react';
import { NodePeople } from './NodePeople';

const meta = {
  title: 'Node/NodePeople',
  component: NodePeople,
} satisfies Meta<typeof NodePeople>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

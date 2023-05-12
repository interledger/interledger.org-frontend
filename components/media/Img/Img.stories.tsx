import { Meta, StoryObj } from '@storybook/react';
import { Img } from './Img';

const meta = {
  title: 'Ui/Img',
  component: Img,
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

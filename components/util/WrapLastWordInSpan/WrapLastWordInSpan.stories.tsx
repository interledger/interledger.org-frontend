import { Meta, StoryObj } from '@storybook/react';
import { WrapLastWordInSpan } from './WrapLastWordInSpan';

const meta = {
  title: 'Util/WrapLastWordInSpan',
  component: WrapLastWordInSpan,
} satisfies Meta<typeof WrapLastWordInSpan>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

import { Meta, StoryObj } from '@storybook/react';
import { FormHasRequired } from './FormHasRequired';

const meta = {
  title: 'Ui/FormHasRequired',
  component: FormHasRequired,
} satisfies Meta<typeof FormHasRequired>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

import { Meta, StoryObj } from '@storybook/react';
import { FormInput } from './FormInput';

const meta = {
  title: 'Ui/FormInput',
  component: FormInput,
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

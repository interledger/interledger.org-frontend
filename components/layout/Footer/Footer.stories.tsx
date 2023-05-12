import { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import * as FooterMenuStories from '@components/nav/FooterMenu/FooterMenu.stories';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerMenu: FooterMenuStories.Default.args?.footerMenu,
  },
};

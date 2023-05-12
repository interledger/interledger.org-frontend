import { MainMenu } from '@components/nav/MainMenu/MainMenu';
import * as MainMenuStories from '@components/nav/MainMenu/MainMenu.stories';
import { Meta, StoryFn } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  argTypes: {},
} satisfies Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => (
  <Header {...args}>
    {args.mainMenu && <MainMenu mainMenu={args.mainMenu} />}
  </Header>
);

export const Default = {
  render: Template,

  args: {
    mainMenu: MainMenuStories.Default.args?.mainMenu,
  },
};

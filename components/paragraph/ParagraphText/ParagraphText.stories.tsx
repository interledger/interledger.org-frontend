import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ParagraphText } from './ParagraphText';

export default {
  title: 'Paragraph/ParagraphText',
  component: ParagraphText,
  argTypes: {},
} satisfies Meta<typeof ParagraphText>;

export const Default = {
  args: {
    paragraph: {
      __typename: 'ParagraphText',
      id: 'ParagraphText',
      text: {
        processed:
          '<h2>Title</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<p><a href="/home">Test link</a></p>\n<ul><li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>',
      },
    },
  },
};

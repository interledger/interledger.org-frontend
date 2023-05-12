const path = require('path');
module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@models': path.resolve(__dirname, '../models'),
      '@store': path.resolve(__dirname, '../store'),
      '@graphql': path.resolve(__dirname, '../graphql'),
      '@styles': path.resolve(__dirname, '../styles'),
      '@lib': path.resolve(__dirname, '../lib'),
      '@mockdata': path.resolve(__dirname, '../mockdata'),
    };
    return config;
  },
  docs: {
    autodocs: true,
  },
};

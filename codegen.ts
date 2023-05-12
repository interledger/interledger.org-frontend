import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://drupal-headless-next.test/graphql': {
        loader: './lib/codegen-loader.ts',
      },
    },
  ],
  hooks: {
    afterAllFileWrite: 'prettier --write',
  },
  generates: {
    './models/graphql.ts': {
      documents: './**/*.graphql',
      plugins: ['typescript'],
      config: {
        omitOperationSuffix: true,
      },
    },
    './models/operations.ts': {
      documents: './**/*.graphql',
      preset: 'import-types',
      presetConfig: {
        typesPath: '@models/graphql',
        importTypesNamespace: 'GraphqlTypes',
      },
      plugins: ['typescript-operations'],
      config: {
        omitOperationSuffix: true,
      },
    },
    './graphql/hooks.ts': {
      documents: './**/*.graphql',
      preset: 'import-types',
      presetConfig: {
        typesPath: '@models/operations',
        importTypesNamespace: 'OperationTypes',
      },
      plugins: [
        {
          add: {
            content: "import { endpoint } from '@graphql/graphql-client';",
          },
        },
        'typescript-react-query',
      ],
      config: {
        fetcher: {
          endpoint: 'endpoint',
        },
        omitOperationSuffix: true,
        pureMagicComment: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;

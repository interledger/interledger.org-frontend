export const endpoint =
  process.env.npm_lifecycle_event === 'build'
    ? `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/graphql`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`;

export const queryOptions = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
};

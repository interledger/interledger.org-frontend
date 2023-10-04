import { queryOptions } from '@graphql/graphql-client';
import { useGetInitDataQuery } from '@graphql/hooks';
import { QueryClient } from '@tanstack/react-query';
import type { GetStaticPropsContext } from 'next';

type EmptyProps = {
  props: Record<string, unknown>;
};

export function withInitData<T extends EmptyProps = EmptyProps>(
  getStaticPropsFunc: (
    ctx: GetStaticPropsContext,
    queryClient: QueryClient,
  ) => Promise<T>,
) {
  return async (ctx: GetStaticPropsContext) => {
    const queryClient = new QueryClient(queryOptions);

    await queryClient.fetchQuery(
      useGetInitDataQuery.getKey(),
      useGetInitDataQuery.fetcher(),
    );

    return getStaticPropsFunc(ctx, queryClient);
  };
}

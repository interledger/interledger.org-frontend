import { queryOptions } from '@graphql/graphql-client';
import { useGetInitDataQuery } from '@graphql/hooks';
import { QueryClient } from '@tanstack/react-query';
import type { GetServerSidePropsContext } from 'next';

type EmptyProps = {
  props: Record<string, unknown>;
};

export function withInitData<T extends EmptyProps = EmptyProps>(
  getServerSidePropsFunc: (
    ctx: GetServerSidePropsContext,
    queryClient: QueryClient
  ) => Promise<T>
) {
  return async (ctx: any) => {
    const queryClient = new QueryClient(queryOptions);

    await queryClient.fetchQuery(
      useGetInitDataQuery.getKey(),
      useGetInitDataQuery.fetcher()
    );

    return getServerSidePropsFunc(ctx, queryClient);
  };
}

import { DrupalClient } from 'next-drupal';

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL as string,
  {
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET as string,
    frontPage: '/home',
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID as string,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET as string,
    },
  }
);

export const graphqlEndpoint = drupal.buildUrl('/graphql');

export const fetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    const res = await drupal.fetch(graphqlEndpoint.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      withAuth: true,
    });

    if (!res?.ok) {
      throw new Error(res.statusText);
    }

    const { data, errors } = await res.json();

    if (errors) {
      throw new Error(
        errors?.map((e: Error) => e.message).join('\n') ?? 'unknown'
      );
    }

    return data;
  };
};

/* eslint-disable import/no-anonymous-default-export */
import { getIntrospectionQuery, buildClientSchema } from 'graphql';
import { drupal } from './drupal';

export const graphqlEndpoint = drupal.buildUrl('/graphql');

export default async () => {
  const introspectionQuery = getIntrospectionQuery();

  const response = await drupal.fetch(graphqlEndpoint.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: introspectionQuery }),
    withAuth: true,
  });

  const json = await response.json();

  return buildClientSchema(json.data);
};

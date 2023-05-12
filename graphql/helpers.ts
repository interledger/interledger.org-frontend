import { GetNodeByPathQuery } from '@models/operations';

export const getRouteEntity = (data: GetNodeByPathQuery) => {
  return data.route?.__typename === 'RouteInternal' ? data.route.entity : null;
};
